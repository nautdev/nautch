<template>
  <section class="section section--crew">
    <div class="section__inner">
      <h2 id="crew" class="section__title">
        Crew
      </h2>
      <div class="crew">
        <p class="crew__text">
          We are 3 passionate creatives conceiving experiences that intersect art, design, technology,
          scenography and emerging digital practices. We design and program interactive installations
          that connect the physical reality with the digital world. We worked for museums, visitor centres,
          brands, and all consortia (e.g. Migros, SBB, Freitag, Swisscom, Swissmilk, Chocolat Frey,
          Siemens, Möhl, Bucherer, etc). Our industry spectrum is pretty vast as there’s a contemporary
          demand for providing digital, immersive and innovative experiences to customers.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Crew'
}
</script>

<style>
.crew {
  &__text {
    font-size: 18px;
    line-height: 1.5;
    max-width: 800px;

    @media (--from-tablet) {
      font-size: 24px;
    }
  }
}
</style>
