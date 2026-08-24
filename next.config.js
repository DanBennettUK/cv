/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true' || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // Deploying a project site to GitHub Pages: <username>.github.io/<repo>/
  const repo = process.env.GITHUB_REPOSITORY.replace(/^[^/]+\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  ...(assetPrefix ? { assetPrefix } : {}),
  ...(basePath ? { basePath } : {}),
};

module.exports = nextConfig;
