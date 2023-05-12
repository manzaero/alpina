<template>
  <div class="container">
      <div class="catalogue">

          <the-crumbs :rooms="rooms"/>

          <div class="catalogue__title">Каталог</div>
          <div class="catalogue__discount">
              <div class="catalogue__discount-block">
                  <div class="catalogue__discount-title">
                      Скидка 40% на кровати и матрасы
                  </div>
                  <button class="btn catalogue__discount-button">Подробнее</button>
              </div>
          </div>
          <the-catalogue :catalogue="catalogue"/>
      </div>
  </div>
</template>

<script>
import {catalogue} from "@/const/catalogue";
import {catalogView} from "@/const/bread-crumbs/catalog-view";
import TheCatalogue from "@/components/catalogue/TheCatalogue.vue";
import TheCrumbs from "@/components/TheCrumbs.vue";

export default {
    data(){
        return {
            catalogue,
            rooms: catalogView
        }
    },
    components:{ TheCatalogue, TheCrumbs},
    name: "CatalogueView"
}
</script>

<style scoped>

</style>