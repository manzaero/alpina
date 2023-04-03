<template>
  <Carousel class="carousel__width" :autoplay="4000" :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in production" :key="slide">
      <a href="#" class="">
         <img class="production__slide-img" :src="require(`../../assets/image/main/production/${slide.img}.png`)">
      </a>
    </Slide>
    <template #addons>
      <navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

export default defineComponent({
  inject:['production'],
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
      transition:1000,
      pauseAutoplayOnHover:true
    },
    breakpoints: {
      320: {
        itemsToShow: 1.4,
        snapAlign: 'left',
      },
      767: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      991: {
        itemsToShow: 1.2,
        snapAlign: 'left',
      },
      1130: {
        itemsToShow: 1.2,
        snapAlign: 'left',
      },
      1400: {
        itemsToShow: 1.5,
        snapAlign: 'center',
      },
      1800: {
        itemsToShow: 1.9,
        snapAlign: 'start',
        itemsToScroll:1
      },
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