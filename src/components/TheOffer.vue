<template>
  <div class="container">
    <div class="d-flex justify-content-between">
      <div class="d-flex__catalog">Лучшее предложение </div>
      <a href="#" class="d-flex__all">
        <p class="d-flex__products">все предложения</p>
        <div class="d-flex__line"/>
      </a>
    </div>
      <div class="row row-cols-4 offer">
          <div class="col offers" v-for="item in offers" :key="item.id">
              <stick-card
                      :sale="item.sale"
                      :png="item.png"
                      :img="item.img"
                      :name="item.name"
                      :price="item.price"
                      :oldPrice="item.oldPrice"
                      :size="item.size"
                      :icon1="item.icon1"
                      :icon2="item.icon2"
                      :icon3="item.icon3"
                      :cart="item.cart"
              />
          </div>
      </div>
    <a href="#" class="d-flex__flex-all">
      <p class="d-flex__products">Все предложения</p>
      <div class=""/>
    </a>
  </div>
</template>

<script>
import {offers} from "@/const/data-value";
import StickCard from "@/components/stick/StickCard.vue";
export default {
  data(){
    return {
      offers
    }
  },
  name: "TheOffer",
    components:{StickCard}
}
</script>

<style scoped>

</style>