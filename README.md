# Dan Bennett - CV

The source for [cv.danbennett.me](https://cv.danbennett.me), my public CV site.

Built with Jekyll and the [modern-resume-theme](https://github.com/sproogen/modern-resume-theme).

## Structure

- `_config.yml` - site config: name, headline, about content and section titles
- `_data/experience.yml` - work experience entries (one per role)
- `_data/education.yml` - education entries
- `_data/projects.yml` - project entries
- `_layouts/`, `_includes/`, `_sass/`, `assets/` - theme files, no need to touch for content changes

## Running locally

Requires Ruby and Jekyll.

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000. Changes rebuild automatically; re-run the serve command after editing `_config.yml`.

## Deployment

Hosted on Vercel. Merging to `master` triggers a production deployment; PR branches get preview deployments.

## License

The theme is MIT licensed. Site content is my own.
