<template>
  <Carousel :settings="settings" :breakpoints="breakpoints" :items-to-show="3" :autoplay="3000" :wrap-around="true">
    <Slide v-for="slide in slides" :key="slide">
      <a href="#" class="carousel__item">
        <img :src="require(`../../assets/image/main/furniture/${slide.img}.png`)" alt="">
        <p class="carousel__text">{{slide.name}}</p>
      </a>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import {slides} from "@/const/data-value";
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    slides,
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
      transition:1000,
      pauseAutoplayOnHover:true
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 2.4,
        snapAlign: 'start',
      },
    },
  })
})
</script>
