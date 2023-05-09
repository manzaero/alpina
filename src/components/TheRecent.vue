<template>
  <div class="container">
    <div class="d-flex__catalog">Недавно просмотренные</div>
    <div class="recent-col">
      <div class="grid">
        <div class="recent-col__main" v-for="recent in theRecent" :key="recent.id">
          <a href="#" class="recent-col__img-container">
            <img class="recent-col__img" :src="require(`@/assets/image/main/recent/${recent.img}.png`)" alt="">
          </a>
          <div class="recent-col__title">
            <a href="#" class="recent-col__text">{{ recent.name }}</a>
            <p>{{ recent.price }} руб.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    theRecent:{
      type: Array,
      required: true
    }
  },
  name: "TheRecent"
}
</script>

<style scoped>

</style>