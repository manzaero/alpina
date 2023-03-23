<template>
  <div class="container production">
    <div class="production__position">
      <div class="title">Раздел о производстве</div>
      <div class="text">Мы стремимся к европейскому качеству, поэтому используем фасады
        и элементы декора, созданные итальянскими дизайнерами и произведенные
        на ведущих фабриках Италии. </div>
    </div>
  </div>
  <div class="production__slide">
    <the-slide-prod />
  </div>
  <div class="container production__about">
    <a href="#" class="title">
      <p>больше о нас</p>
      <div class="production__border"></div>
    </a>
  </div>
</template>

<script>
import TheSlideProd from "@/components/production/TheSlideProd";
export default {
  name: "TheProduction",
  components: {TheSlideProd}
}
</script>

<style scoped>

</style>