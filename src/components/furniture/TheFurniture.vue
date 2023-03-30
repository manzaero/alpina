<template>
  <div class="furniture__main">
    <div class="container furniture">
      <div class="furniture__left">
        <p class="furniture__title">
          Мебель для ресторанов <br> гостиниц, или офиса
        </p>
        <p class="furniture__text">
          Мы стремимся к европейскому качеству, поэтому используем фасады <br>
          и элементы декора, созданные итальянскими дизайнерами
        </p>
        <button class="furniture__btn">Подробнее</button>
      </div>
    </div>
    <div class="furniture__slider">
      <the-slider/>
    </div>
  </div>
</template>

<script>
import TheSlider from "@/components/furniture/TheSlider";
export default {
  name: "TheFurniture",
  components:{TheSlider}
}
</script>

<style scoped>

</style>