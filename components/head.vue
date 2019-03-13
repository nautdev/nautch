<template>
  <section class="section section--logo">
    <h1 class="logo">
      <span class="logo__brand">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 110"
        >
          <style>.st0{fill:#fff}</style>
          <path d="M0 0h300v110H0z" />
          <path d="M40.5 53.9v-1.1c0-1.1.8-1.9 1.9-1.9H79c1.1 0 1.9.8 1.9 1.9v1.1c0 1-.8 1.8-1.9 1.8H42.3c-1.1-.1-1.8-.9-1.8-1.8zM96.4 39.9c0-1 .9-1.9 1.9-1.9h1.9c.9 0 1.4.4 1.6 1.2l.9 3.1s5.7-5.3 13.9-5.3c11.5 0 15.4 7.6 15.4 17.9v21c0 1-.9 1.9-1.9 1.9H127c-1 0-1.9-.9-1.9-1.9v-21c0-7.6-3.4-11.2-8.9-11.2-7.5 0-12.8 5.7-12.8 5.7v26.5c0 1-.9 1.9-1.9 1.9h-3.1c-1 0-1.9-.9-1.9-1.9v-36zM158.7 52.6c4.3 0 8.5 1.3 8.5 1.3.1-7.4-.8-10.7-6.5-10.7-5.5 0-10.1 1.5-11.9 2.2-1 .4-1.6-.1-1.9-1l-.8-2.5c-.4-1.2.2-1.8 1.1-2.2.6-.3 6.4-2.6 13.8-2.6 10.1 0 12.6 5.2 12.6 16.8V76c0 1-.9 1.9-1.9 1.9h-1.9c-1.1 0-1.4-.6-1.7-1.5l-.8-2.7c-2.1 2.1-6.2 5.2-12.3 5.2-7 0-12.2-5.1-12.2-13 0-7.7 5.6-13.3 15.9-13.3zm-2.6 20.2c5 0 9.2-3.1 10.9-5.6v-7.9c-1.2-.7-4-1.6-8.4-1.6-5.6 0-9.5 2.8-9.5 8 0 4.1 2.7 7.1 7 7.1zM186.9 39.9c0-1 .9-1.9 1.9-1.9h3.2c1 0 1.9.9 1.9 1.9v21c0 7.6 3.4 11.2 8.9 11.2 7.6 0 11.8-5.7 11.8-5.7V39.9c0-1 .9-1.9 1.9-1.9h3.1c1 0 1.9.9 1.9 1.9v36c0 1-.9 1.9-1.9 1.9h-1.9c-1.1 0-1.5-.7-1.8-1.7l-.7-2.6s-4.7 5.3-12.9 5.3c-11.5 0-15.4-7.5-15.4-18V39.9zM238.2 44h-5.1c-1.1 0-1.9-.9-1.9-1.9v-2.2c0-1.1.8-1.9 1.9-1.9h5.1V27c0-1 .9-1.9 1.9-1.9l3.2-.2c1 0 1.8.9 1.8 1.9V38h11.5c1.1 0 1.9.8 1.9 1.9v2.2c0 1-.8 1.9-1.9 1.9h-11.5v23.3c0 4 1 4.8 3.3 4.8 2.5 0 6-1.5 7.3-2.2 1.5-.8 1.9-.2 2.4.6l1.5 2.5c.7 1.2.4 1.8-.7 2.5-1.4.9-6.8 3.4-11.4 3.4-8 0-9.1-4.8-9.1-10.9V44z" class="st0" />
        </svg>
      </span>
      <span class="logo__slogan">Interactive experiences intersecting art, design, technology and scenography.</span>
    </h1>
    <canvas
      id="canvas"
    />
    <div id="debug" />
  </section>
</template>

<script>
export default {
  name: 'Head'
}
</script>

<style>
#canvas {
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
}

.logo {
  z-index: 99;

  &__brand {
    display: block;
    margin: 0 auto;
    width: 200px;
  }

  &__slogan {
    display: block;
    font-size: 25px;
    font-weight: 500;
    line-height: 1.5;
    margin: 50px 20px 0 20px;
    opacity: 1;
    transition: opacity 0.25s ease-in-out;
    max-width: 800px;

    @media (--from-tablet) {
      max-width: 800px;
      margin: 100px 0 0 0;
      font-size: 45px;
    }
  }

  &.fixed {
    position: fixed;
    top: 0;

    .logo__slogan {
      opacity: 0;
    }
  }
}
</style>
