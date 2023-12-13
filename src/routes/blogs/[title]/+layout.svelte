<script>
   export let data;
</script>
<main class="grid">
   <slot/>

   <aside data-sveltekit-reload>
      {#each data.blogPosts as post(post.id)}
        <li><a href="/blogs/{post.title}">{post.title}</a></li>
      {/each}
   </aside>
</main>
