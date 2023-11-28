import { createPool } from '@vercel/postgres';
import { POSTGRES_URL } from '$env/static/private';

export async function load({}) {
	const pool = createPool({
		connectionString: POSTGRES_URL
	});

	const { rows } = await pool.sql`
    SELECT * FROM blog_posts;
  `;

	return { blogPosts: rows };
}
