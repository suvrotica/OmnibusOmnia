import { createPool } from '@vercel/postgres';
import { POSTGRES_URL } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

async function createBlogPost(title, content, imageUrl) {
	const pool = createPool({
		connectionString: POSTGRES_URL
	});
	await pool.sql`
    CREATE TABLE IF NOT EXISTS blog_posts (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255),
      content TEXT,
      image_url VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
  `;

	await pool.sql`
    INSERT INTO blog_posts (title, content, image_url)
    VALUES (${title}, ${content}, ${imageUrl});
    
  `;
}

export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const title = form.get('title');
		const content = form.get('content');
		const imageUrl = form.get('image_url');

		try {
			await createBlogPost(title, content, imageUrl);

			console.log('Blog post was created', id);
			throw redirect(303, '/');
			return { message: 'Blog post was created' }; // Return a plain object
		} catch (err) {
			return { error: err.message }; // Return a plain object
		}
	}
};
