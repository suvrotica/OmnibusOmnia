// src/routes/your-route/+page.server.js
import { sql } from '@vercel/postgres';

export async function POST({ request }) {
  const form = await request.formData();
  const title = form.get('title');
  const content = form.get('content');
  const imageUrl = form.get('image_url');

  await sql`
    INSERT INTO blog_posts (title, content, image_url)
    VALUES (${title}, ${content}, ${imageUrl});
  `;

  return new Response(JSON.stringify({ message: 'Blog post created' }), { status: 201 });
}

import { sql } from '@vercel/postgres';

export async function POST({ request }) {
	const form = await request.formData();
	const title = form.get('title');
	const content = form.get('content');
	const imageUrl = form.get('image_url');

	await sql`
    CREATE TABLE IF NOT EXISTS blog_posts (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255),
      content TEXT,
      image_url VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

	await sql`
    INSERT INTO blog_posts (title, content, image_url)
    VALUES (${title}, ${content}, ${imageUrl});
  `;

	return new Response(JSON.stringify({ message: 'Blog post created' }), { status: 201 });
}
