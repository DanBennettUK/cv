import { createServer } from 'node:net';
import { existsSync, mkdtempSync, readFileSync, rmSync, mkdirSync, copyFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { spawn } from 'node:child_process';

const root = process.cwd();
const distDir = resolve(root, 'dist');
const outputPath = resolve(root, 'public', 'Dan-Bennett-CV.pdf');
const chromiumCandidates = [
  process.env.CHROMIUM_BIN,
  '/usr/local/bin/chromium',
  '/usr/bin/chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
].filter((candidate) => candidate && existsSync(candidate));

if (!existsSync(join(distDir, 'resume', 'index.html'))) {
  throw new Error('dist/resume/index.html is missing. Run `npm run build` before generating the PDF.');
}

if (chromiumCandidates.length === 0) {
  throw new Error('Chromium was not found. Set CHROMIUM_BIN or install a Chromium-based browser.');
}

function getFreePort() {
  return new Promise((resolvePort, reject) => {
    const server = createServer();
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      if (!address || typeof address === 'string') {
        server.close();
        reject(new Error('Could not determine an available local port.'));
        return;
      }
      const port = address.port;
      server.close((error) => error ? reject(error) : resolvePort(port));
    });
  });
}

function sleep(ms) {
  return new Promise((resolveSleep) => setTimeout(resolveSleep, ms));
}

async function waitFor(url) {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // The server may still be starting.
    }
    await sleep(250);
  }
  throw new Error(`Local preview did not become ready: ${url}`);
}

function run(command, args) {
  return new Promise((resolveRun, rejectRun) => {
    const child = spawn(command, args, { stdio: 'inherit' });
    child.once('error', rejectRun);
    child.once('close', (code, signal) => {
      if (code === 0) {
        resolveRun();
      } else {
        rejectRun(new Error(`${command} exited with ${signal || `code ${code}`}`));
      }
    });
  });
}

const port = await getFreePort();
const server = spawn('python3', ['-m', 'http.server', String(port), '--directory', distDir], {
  stdio: 'ignore',
});
const profileDir = mkdtempSync('/tmp/cv-chromium-');
mkdirSync(resolve(root, 'public'), { recursive: true });

try {
  const resumeUrl = `http://127.0.0.1:${port}/resume/?print=1`;
  await waitFor(resumeUrl);
  await run(chromiumCandidates[0], [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--disable-dev-shm-usage',
    '--no-pdf-header-footer',
    '--run-all-compositor-stages-before-draw',
    '--virtual-time-budget=3000',
    `--user-data-dir=${profileDir}`,
    `--print-to-pdf=${outputPath}`,
    resumeUrl,
  ]);

  if (!existsSync(outputPath) || readFileSync(outputPath).length === 0) {
    throw new Error(`Chromium did not create a usable PDF at ${outputPath}`);
  }

  copyFileSync(outputPath, join(distDir, 'Dan-Bennett-CV.pdf'));
  console.log(`Generated ${outputPath}`);
} finally {
  server.kill('SIGTERM');
  rmSync(profileDir, { recursive: true, force: true });
}
