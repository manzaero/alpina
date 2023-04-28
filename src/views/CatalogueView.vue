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
          <div class="catalogue__card">
              <div class="catalogue__card-item" v-for="item in catalogue" :key="item.id">
                  <div class="catalogue__card-img">
                      <img :src="require(`../assets/image/catalogue/${item.img}.png`)" alt="">
                  </div>
                  <ul>
                      <li>{{ item.name[0] }}</li>
                      <li>{{ item.name[1] }}</li>
                      <li>{{ item.name[2] }}</li>
                      <li>{{ item.name[3] }}</li>
                      <li>{{ item.name[4] }}</li>
                      <li>{{ item.name[5] }}</li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import {catalogue} from "@/const/catalogue";

export default {
    data(){
        return {
            catalogue
        }
    },
    name: "CatalogueView"
}
</script>

<style scoped>

</style>