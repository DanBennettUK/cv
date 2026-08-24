const fs = require('fs');

/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true' || false;

// A custom domain (public/CNAME) serves the site at the root path, so no
// basePath is needed. Only the <user>.github.io/<repo>/ project URL needs it.
const hasCname = fs.existsSync('public/CNAME');

let assetPrefix = '';
let basePath = '';

if (isGithubActions && !hasCname) {
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
