import { createPool } from "@vercel/postgres";
import { POSTGRES_URL } from "$env/static/private";

const pool = createPool({
    connectionString: POSTGRES_URL,
});

export async function load({}) {
    const { rows: blogPosts } = await pool.sql`SELECT * FROM blog_posts`;
    return { props: { blogPosts } };
}

async function updateBlogPost(blogPost) {
    await pool.sql`
        UPDATE blog_posts 
        SET title = ${blogPost.title}, content = ${blogPost.content}, image_url = ${blogPost.image_url}, tag_set = ${blogPost.tag_set}
        WHERE id = ${blogPost.id}`;
}

export const actions = {
    update: async ({ request }) => {
        const form = await request.formData();
        const blogPost = {
            id: form.get("id"),
            title: form.get("title"),
            content: form.get("content"),
            image_url: form.get("image_url"),
            tag_set: form.get("tag_set")
        };

        await updateBlogPost(blogPost);
        return { status: 303, headers: { location: '/blog-posts' } }; // Redirect after successful update
    }
};
