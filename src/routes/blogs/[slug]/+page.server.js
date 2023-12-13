import { sql } from '@vercel/postgres';
import { createSlug } from '$lib/utility-functions';

export const prerender = false;

export async function load({ params }) {
    const slug = params.slug;

    // Fetch all posts
    const { rows } = await sql`SELECT id, title, content, tag_set, image_url, created_at FROM blog_posts;`;

    // Find the post that matches the slug
    const post = rows.find(row => createSlug(row.title) === slug);

    if (post) {
        return { post };
    } else {
        // Handle the case where no post matches the slug
        throw new Error('Post not found');
    }
}
