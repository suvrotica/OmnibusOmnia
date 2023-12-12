import { sql } from '@vercel/postgres';
export const prerender = false;
export async function load({}) {
	const { rows } = await sql`select id,title,tag_set,created_at from blog_posts order by created_at desc;`;
	return { blogPosts: rows };
}
