<script>
  import Post from '$lib/components/post.svelte';
  export let data;
  const post = data.post;
  const metaDataRows = data.metaDataRows;
</script>

<main class="grid">
   <Post {post}/>
   <aside>
     {#each metaDataRows as metaDataRow}
       {metaDataRow.title}
     {/each}
   </aside>
</main>

