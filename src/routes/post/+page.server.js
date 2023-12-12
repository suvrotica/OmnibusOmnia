
import { sql } from '@vercel/postgres';
import { put } from '@vercel/blob';
import { error } from '@sveltejs/kit';
export const prerender = false;
async function createBlogPost(title, content, imageUrl, tagSet) {
	
	await sql`
        CREATE TABLE IF NOT EXISTS blog_posts (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            content TEXT NOT NULL,
            image_url VARCHAR(255) NOT NULL,
            tag_set VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
        );
    `;

	const rowInserted = await sql`
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
		const file = form.get('image-upload');
		const tagSet = form.get('tag_set');

		if (!file) {
			throw error(400, { message: 'No file to upload.' });
		}

		// Upload the file and get the URL
		const { url } = await put(file.name, file, { access: 'public' });

		console.log('Uploaded file to: ', url);
		try {
			await createBlogPost(title, content, url, tagSet);
			return { message: 'Blog post was created' };
		} catch (err) {
			console.log('Error in posting to server: ', err.message);
			return { error: err.message };
		}
	}
};
