import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://joaopereira.ie',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://joaopereira.ie/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];
}
