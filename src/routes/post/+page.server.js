import { createPool } from '@vercel/postgres';
import { POSTGRES_URL } from '$env/static/private';

async function createBlogPost(title, content, imageUrl) {
	const pool = createPool({
		connectionString: POSTGRES_URL
	});

	await pool.sql`
    CREATE TABLE IF NOT EXISTS blog_posts (
		id SERIAL PRIMARY KEY,
		title VARCHAR(255) NOT NULL,
		content TEXT NOT NULL,
		image_url VARCHAR(255) NOT NULL,
		tag_set VARCHAR(255) NOT NULL,
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
	  );
	  
  `;

	const rowInserted = await pool.sql`
    INSERT INTO blog_posts (title, content, image_url, tag_set)
  	VALUES (${title}, ${content}, ${imageUrl}, ${tagSet});
  `;

	return rowInserted;
}

export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const title = form.get('title');
		const content = form.get('content');
		const imageUrl = form.get('image_url');

		try {
			const rowInserted = await createBlogPost(title, content, imageUrl);
			console.log(rowInserted.id);
			return { message: 'Blog post was created' }; // Return a plain object
		} catch (err) {
			return { error: err.message }; // Return a plain object
		}
	}
};
