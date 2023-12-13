<script>
  import Post from '$lib/components/post.svelte';
  export let data;
  const post = data.post;
  const posts = data.posts;
</script>

<main class="grid">
   <Post {post}/>
   <aside>
     {#each posts as post}
       {post.title}
     {/each}
   </aside>
</main>

