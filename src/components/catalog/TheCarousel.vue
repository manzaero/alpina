<template>
  <Carousel class="carousel__width" :autoplay="5000" :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in slides" :key="slide">
      <a href="#" class="carousel__item">
        <img :src="require(`../../assets/image/main/catalog/${slide.img}.png`)" alt="slide.name">
        <p class="carousel__text">{{ slide.name }}</p>
      </a>

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
      transition:1000,
      pauseAutoplayOnHover:true
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