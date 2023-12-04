<script>
    export let data;
    import Post from '$lib/components/post.svelte';

    function groupPostsByTag(posts) {
    const grouped = {};
    posts.forEach(post => {
        const tag = post.tag_set;
        if (!grouped[tag]) {
            grouped[tag] = [];
        }
        grouped[tag].push(post);
    });
    return grouped;
}

const groupedPosts = groupPostsByTag(data.blogPosts);

</script>

{#if Object.keys(groupedPosts).length > 0}
    {#each Object.keys(groupedPosts) as tag}
        <details>
            <summary>{tag}</summary>
            {#each groupedPosts[tag] as post}
                <Post {post} />
            {/each}
        </details>
    {/each}
{:else}
    <h2>No blog posts available</h2>
{/if}

