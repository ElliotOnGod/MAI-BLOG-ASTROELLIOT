import rss from '@astrojs/rss';

export async function GET(context) {
    const postFiles = import.meta.glob('./posts/*.md', { eager: true });
    const posts = Object.values(postFiles);
    return rss({
        title: 'Mi Blog de Aprendizaje en Astro',
        description: 'Blog personal de Elliot sobre lo que aprende con Astro',
        site: context.site,
        items: posts.map((post) => ({
            title: post.frontmatter.title,
            pubDate: post.frontmatter.pubDate,
            description: post.frontmatter.description,
            link: post.url,
        })),
    });
}
