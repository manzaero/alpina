<template>
  <div class="container">
    <div class="d-flex justify-content-between">
      <div class="d-flex__catalog">Коллекции плитки</div>
      <a href="#" class="d-flex__all">
        <p class="d-flex__products">все коллекции</p>
        <div class="d-flex__line"/>
      </a>
    </div>
    <div class="col col-collection list-unstyled">
      <img src="../assets/image/main/collection/spa.png" alt="">
      <div class="d-flex col-collection__img">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </div>
      <div class="d-flex justify-content-between list-unstyled col-collection__text">
        <li>Блестящая коллекция Maracesh</li>
        <li>от 2000 руб./м2</li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCollection"
}
</script>

<style scoped>

</style>