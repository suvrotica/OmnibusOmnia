<script>
export let data;
const post=data.post;
</script>

{#if !post}
 <h1>No post with that title</h1>
{:else}
 {@html post.id}
{/if}
