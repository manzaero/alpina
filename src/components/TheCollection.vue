<template>
  <div class="container container-collection__main">
    <div class="d-flex justify-content-between">
      <div class="d-flex__catalog">Коллекции плитки</div>
      <a href="#" class="d-flex__all">
        <p class="d-flex__products">вся коллекция</p>
        <div class="d-flex__line"/>
      </a>
    </div>
    <div class="container-collection">
      <div class="container-collection__img-container" v-for="collect in theCollection" :key="collect.id">
        <img :src="require(`@/assets/image/main/collection/${collect.img}.png`)" alt="" class="container-collection__img">
        <div class="container-collection__box">
          <div class="container-collection__box-icon">
            <img class="container-collection__icon" :src="require(`@/assets/image/main/collection/${collect.icon1}.png`)" alt="">
            <img class="container-collection__icon" :src="require(`@/assets/image/main/collection/${collect.icon2}.png`)" alt="">
            <img class="container-collection__icon" :src="require(`@/assets/image/main/collection/${collect.icon3}.png`)" alt="">
            <img class="container-collection__icon" :src="require(`@/assets/image/main/collection/${collect.icon4}.png`)" alt="">
          </div>
          <div class="container-collection__more">
            <div class="container-collection__p">
              + {{ collect.more }}
            </div>
          </div>
        </div>
        <div class="container-collection__brand-price">
          <div class="container-collection__brand">
            <p>{{ collect.name }}</p>
          </div>
          <div class="container-collection__price">
            <p>от {{ collect.price }} руб./м2</p>
          </div>
        </div>
      </div>
    </div>
    <a href="#" class="d-flex__flex-all">
      <p class="d-flex__products">Вся коллекция</p>
      <div class=""/>
    </a>
  </div>
</template>

<script>
export default {
  props:{
    theCollection:{
      type: Array,
      require:true
    }
  },
  name: "TheCollection"
}
</script>

<style scoped>

</style>