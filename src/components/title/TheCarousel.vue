<template>
  <Carousel :autoplay="1000" :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in slides" :key="slide">
      <div class="carousel__item">
        <img class="carousel__img" :src="require(`../../assets/image/main/catalog/${slide.img}.png`)" alt="slide.name">
        <p class="carousel__text">test</p>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import {catalog} from "@/const/data-value";

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    slides: catalog,
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
      transition:3000
    },
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: 'start',
        itemsToScroll:2
      },
    },
  }),
})
</script>

<style lang="scss" scoped>
.carousel {
  &__img {
  }
  &__text {
    text-align: start;
  }
}
</style>