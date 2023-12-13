<script>
//import Post from '$lib/components/post.svelte';
export let data;
//const post=data.post;
const title = data.title;
</script>
<h1>{title}</h1>
//{#if !post}
// <h1>No post with that title</h1>
//{:else}
 //<Post {post}/>
//{/if}
