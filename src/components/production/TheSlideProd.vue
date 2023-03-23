<template>
  <Carousel class="carousel__width" :autoplay="5000" :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in production" :key="slide">
      <a href="#" class="">
         <img :src="require(`../../assets/image/main/production/${slide.img}.png`)">
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
      // 700px and up
      700: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 2,
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