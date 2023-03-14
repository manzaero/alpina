<template>
  <div class="container">
    <div class="d-flex justify-content-between">
      <div class="d-flex__catalog">Популярные категории</div>
      <a href="#" class="d-flex__all">
        <p class="d-flex__products">Все категории</p>
        <div class="d-flex__line"/>
      </a>
    </div>
    <div class="row row-cols-4">
      <div class="col offers">
        <button class="offers__btn">Распродажа</button>

        <div href="#" class="offers__img">
          <img src="../assets/image/main/offer/kreslo.png" alt="">
        </div>
        <div class="d-flex offers__info">
          <div class="col">
            <a href="#" class="offers__title">Декоративный куст, с шикарными листьями, горшком</a>
          </div>
          <div class="col-md-auto">
            <span>2 000 руб.</span>
          </div>
        </div>
        <span>120 × 212  × 46 </span>
      </div>
      <div class="col">Column</div>
      <div class="col">Column</div>
      <div class="col">Column</div>
      <div class="col">Column</div>
      <div class="col">Column</div>
      <div class="col">Column</div>
      <div class="col">Column</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheOffer"
}
</script>

<style scoped>

</style>