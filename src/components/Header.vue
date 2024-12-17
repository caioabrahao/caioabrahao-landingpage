<script>
export default {
  name: 'Header',
}
</script>


<template>
    <header class="header">
      <p class="logo">CA</p>
      <nav>
        <ul class="navlist">
          <li><a href="/index.html">Home</a></li>
          <li><a href="src/pages/about.html">About</a></li>
          <li><a href="src/pages/portfolio.html">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
</template>


<style scoped>
.header{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  padding: 24px 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--beige);
}

.header .navlist{
  display: flex;
  align-items: center;
  list-style: none;
  text-decoration: none;
  gap: 64px;
}
.header .navlist a{
  text-decoration: none;
  color: var(--beige);
  font-weight: 500;
  transition: all .3s cubic-bezier(.25, .8, .25, 1);  
}
.header .navlist a:hover{
  color: #FC8C3D;
}
.logo{
  font-size: 2rem;
  font-weight: 700;
  color: var(--beige);
  text-decoration: none;
  font-family: 'Playfair Display', serif;
}
</style>