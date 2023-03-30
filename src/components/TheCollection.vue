<template>
  <div class="container container-collection__main">
    <div class="d-flex justify-content-between">
      <div class="d-flex__catalog">Коллекции плитки</div>
      <a href="#" class="d-flex__all">
        <p class="d-flex__products">все коллекции</p>
        <div class="d-flex__line"/>
      </a>
    </div>
    <div class="container-collection">
      <div class="container-collection__img-container">
        <img src="../assets/image/main/collection/spa.png" alt="" class="container-collection__img">
        <div class="container-collection__box">
          <div class="container-collection__box-icon">
            <img class="container-collection__icon" src="../assets/image/main/collection/bush.png" alt="">
            <img class="container-collection__icon" src="../assets/image/main/collection/chair.png" alt="">
            <img class="container-collection__icon" src="../assets/image/main/collection/none.png" alt="">
            <img class="container-collection__icon" src="../assets/image/main/collection/pen.png" alt="">
          </div>
          <div class="container-collection__more">
            <div class="container-collection__p">
              + 5
            </div>
          </div>
        </div>
        <div class="container-collection__brand-price">
          <div class="container-collection__brand">
            <p>Блестящая коллекция Maracesh</p>
          </div>
          <div class="container-collection__price">
            <p>от 2000 руб./м2</p>
          </div>
        </div>
      </div>
      <div class="container-collection__img-container">
        <img src="../assets/image/main/collection/spa.png" alt="" class="container-collection__img">
        <div class="container-collection__box">
          <div>
            <img class="container-collection__icon" src="../assets/image/main/collection/bush.png" alt="">
            <img class="container-collection__icon" src="../assets/image/main/collection/chair.png" alt="">
            <img class="container-collection__icon" src="../assets/image/main/collection/none.png" alt="">
            <img class="container-collection__icon" src="../assets/image/main/collection/pen.png" alt="">
          </div>
          <div class="container-collection__more">
            <div class="container-collection__p">
              + 5
            </div>
          </div>
        </div>
        <div class="container-collection__brand-price">
          <div class="container-collection__brand">
            <p>Блестящая коллекция Maracesh</p>
          </div>
          <div class="container-collection__price">
            <p>от 2000 руб./м2</p>
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