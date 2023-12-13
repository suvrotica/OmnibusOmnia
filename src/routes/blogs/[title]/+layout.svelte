<script>
   export let data;
</script>
<main>
   <slot/>
</main>
<aside>
   {#each data.blogPosts as post(post.id)}
        <li><a href="/blogs/{post.title}">{post.title}</a></li>
   {/each}
</aside>
