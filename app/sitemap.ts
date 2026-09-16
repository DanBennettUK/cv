import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const siteUrl = 'https://cv.danbennett.me';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/` },
    { url: `${siteUrl}/resume/` },
  ];
}
