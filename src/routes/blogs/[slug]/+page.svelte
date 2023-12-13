<script>
  import Post from '$lib/components/post.svelte';
  export let data;
  const post = data.post;
</script>


<Post {post}/>

