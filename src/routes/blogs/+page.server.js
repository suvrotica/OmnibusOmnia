import { sql } from '@vercel/postgres';
export const prerender = false;
export async function load({}) {
	const { rows } = await sql`SELECT * FROM blog_posts;`;
	return { blogPosts: rows };
}
