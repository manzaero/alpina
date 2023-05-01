<template>
  <div class="container">
      <div class="catalogue">
          <div class="navigation-page">
            <span>
              <router-link to="/">Главная</router-link>
              /
              <router-link to="/catalogue">Каталог</router-link>
            </span>
          </div>
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
import TheCatalogue from "@/components/catalogue/TheCatalogue.vue";

export default {
    data(){
        return {
            catalogue
        }
    },
    components:{TheCatalogue},
    name: "CatalogueView"
}
</script>

<style scoped>

</style>