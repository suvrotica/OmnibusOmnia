export async function load({ params }) {
        // Extract the title from the URL
        const { title } = params.slug;
        
        return title;
}
