<template>
  <div class="container col-collection__main">
    <div class="d-flex justify-content-between">
      <div class="d-flex__catalog">Коллекции плитки</div>
      <a href="#" class="d-flex__all">
        <p class="d-flex__products">все коллекции</p>
        <div class="d-flex__line"/>
      </a>
    </div>
    <div class="container-collection">
      <div class="d-flex d-flex__collection">
        <div class="col col-collection list-unstyled" v-for="collect in theCollection" :key="collect.id">
          <img :src="require(`../assets/image/main/collection/${collect.img}.png`)" alt="">
          <div class="d-flex">
            <a class="col-collection__img">
              <img :src="require(`../assets/image/main/collection/${collect.icon1}.png`)" alt="">
            </a>
            <a class="col-collection__img">
              <img :src="require(`../assets/image/main/collection/${collect.icon2}.png`)" alt="">
            </a>
            <a class="col-collection__img">
              <img :src="require(`../assets/image/main/collection/${collect.icon3}.png`)" alt="">
            </a>
            <a class="col-collection__img">
              <img :src="require(`../assets/image/main/collection/${collect.icon4}.png`)" alt="">
            </a>
            <a href="#" class="col-collection__img">
              <p>+ 5</p>
            </a>
          </div>
          <div class="d-flex justify-content-between list-unstyled col-collection__text">
            <li>{{ collect.name }}</li>
            <li>от {{ collect.price }} руб./м2</li>
          </div>
        </div>
      </div>
    </div>
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