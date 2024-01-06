import { sql } from '@vercel/postgres';
import { POSTGRES_URL } from '$env/static/private';
import { createSlug } from '$lib/utility-functions';


export async function get(request) {
    try {
        // Fetch all posts with null slug
        const { rows: posts } = await sql`SELECT id, title FROM blog_posts WHERE slug IS NULL`;

        // Update each post with a generated slug
        for (const post of posts) {
            const slug = createSlug(post.title);
            await sql`UPDATE blog_posts SET slug = ${slug} WHERE id = ${post.id}`;
        }

        return {
            status: 200,
            body: { message: 'Slugs updated successfully' }
        };
    } catch (error) {
        return {
            status: 500,
            body: { error: 'Error updating slugs' }
        };
    }
}

