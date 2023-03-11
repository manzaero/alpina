<template>
  <div class="catalog">
    <div class="container">
      <div class="d-flex justify-content-between">
        <div class="d-flex__catalog">Каталог по комнатам</div>
        <a href="#" class="d-flex__all">
          <p class="d-flex__products">Все комнаты</p>
          <div class="d-flex__line"/>
        </a>
      </div>
      <the-carousel/>
    </div>
  </div>
</template>

<script>
import TheCarousel from "@/components/catalog/TheCarousel";
export default {
  name: "TheCatalog",
  components: {TheCarousel}
}
</script>