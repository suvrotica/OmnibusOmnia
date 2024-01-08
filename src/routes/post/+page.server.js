import { sql } from '@vercel/postgres';
import { put } from '@vercel/blob';
import { error } from '@sveltejs/kit';
import { createSlug } from '$lib/utility-functions';
export const prerender = false;
async function createBlogPost(title, slug, content, imageUrl, tagSet) {
	await sql`
	CREATE TABLE IF NOT EXISTS blog_posts (
		id SERIAL PRIMARY KEY,
		title VARCHAR(255) NOT NULL,
		content TEXT NOT NULL,
		image_url VARCHAR(255) NOT NULL,
		tag_set VARCHAR(255) NOT NULL,
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
		slug VARCHAR(255) NOT NULL UNIQUE,
		update_dates DATE[] NOT NULL DEFAULT ARRAY[]::DATE[]
	);
	
	CREATE INDEX ON blog_posts (slug);
	`;

	const rowInserted = await sql`
        INSERT INTO blog_posts (title, slug, content, image_url, tag_set)
        VALUES (${title}, ${slug}, ${content}, ${imageUrl}, ${tagSet});
    `;

	return rowInserted;
}

export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const title = form.get('title');
		const content = form.get('content');
		const file = form.get('image-upload');
		const tagSet = form.get('tag_set');

		if (!file) {
			throw error(400, { message: 'No file to upload.' });
		}

		// Upload the file and get the URL from vercel blob
		const { url } = await put(file.name, file, { access: 'public' });

		console.log('Uploaded file to: ', url);
		try {
			await createBlogPost(title, createSlug(title), content, url, tagSet);
			return { message: 'Blog post was created' };
		} catch (err) {
			console.log('Error in posting to server: ', err.message);
			return { error: err.message };
		}
	}
};
