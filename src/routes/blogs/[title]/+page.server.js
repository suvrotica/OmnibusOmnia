import { sql } from '@vercel/postgres';

export const prerender = false;

export async function load({ params }) {
        const title = params.title;
        const { rows } = await sql`SELECT id,title,content,tag_set,image_url,created_at FROM blog_posts WHERE TRIM(title)=${title};`;
        return {post:rows[0]};
}
