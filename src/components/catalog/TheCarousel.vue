<template>
  <Carousel class="carousel__width" :autoplay="5000" :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in catalog" :key="slide">
      <a href="#" class="carousel__item">
        <img  class="carousel__img" :src="require(`../../assets/image/main/catalog/${slide.img}.png`)" alt="slide.name">
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
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  props:{
    catalog:{
      type: Array,
      required: true
    }
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
      transition:1000,
      pauseAutoplayOnHover:true
    },
    breakpoints: {
      364: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      539: {
        itemsToShow: 1.5,
        snapAlign: 'center',
      },
      767: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      991: {
        itemsToShow: 2.5,
        snapAlign: 'center',
      },
      1200: {
        itemsToShow: 3,
        snapAlign: 'start',
        itemsToScroll:2
      },
      1399: {
        itemsToShow: 3,
        snapAlign: 'start',
        itemsToScroll:2
      },
      1400: {
        itemsToShow: 4,
        snapAlign: 'start',
        itemsToScroll:2
      }
    },
  }),
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide,
    Navigation,
  }
})
</script>