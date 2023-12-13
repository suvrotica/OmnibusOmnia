import { sql } from '@vercel/postgres';
import { createSlug } from '$lib/utility-functions';

export const prerender = false;

export async function load({ params }) {
    const slug = params.slug;

    // Fetch all post meta data but not content
    const {rows}  = await sql`SELECT id, title, tag_set FROM blog_posts;`;
    const metaDataRows = rows;
    
    // Find the post that matches the slug
    const metaDataPost = metaDataRows.find(row => createSlug(row.title) === slug);

    // id of the matched post
    const id = metaDataPost.id;

    // get the post whose title matched slug
    const {rows} = await sql`SELECT * FROM blog_posts WHERE id=${id};`;
    const post=rows[0];

    if (post) {
        return { metaDataRows, post };
    } else {
        // Handle the case where no post matches the slug
        throw new Error('Post not found');
    }
}
