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
      <the-carousel :catalog="catalog"/>
    </div>
  </div>
</template>

<script>
import {catalog} from "@/const/data-value";
import TheCarousel from "@/components/catalog/TheCarousel";
export default {
  data(){
    return {
      catalog
    }
  },
  name: "TheCatalog",
  components: {TheCarousel}
}
</script>