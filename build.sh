#!/bin/bash
set -e

# Vercel build entrypoint. Modern Vercel build images ship Ruby and Bundler,
# so the legacy yum/ruby23 install steps are gone.
bundle install
bundle exec jekyll build
