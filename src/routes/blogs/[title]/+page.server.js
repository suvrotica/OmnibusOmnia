import { sql } from '@vercel/postgres';

export const prerender = false;

export async function load({ params }) {
        const title=params.title;
        const { rows } = await sql`SELECT id,title,tag_set,image_url,created_at FROM blog_posts WHERE title=${title};`;
        return {title,blogPosts:rows};
}
