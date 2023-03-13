<template>
  <div class="container">
    <div class="d-flex d-flex__right">
      <div class="col__left">
        <p class="">
          Мебель для ресторанов <br> гостиниц, или офиса
        </p>
        <p class="">
          Мы стремимся к европейскому качеству, поэтому используем фасады <br>
          и элементы декора, созданные итальянскими дизайнерами
        </p>
        <button class="btn__furniture">Подробнее</button>
      </div>
      <div class="col__ignore">
        <the-slider />
      </div>
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