<template>
  <div class="container">
    <div class="d-flex justify-content-between">
      <div class="d-flex__catalog">Недавно просмотренные</div>
    </div>
    <div class="recent">
      <div class="recent-col" v-for="recent in theRecent" :key="recent.id">
        <div class="d-flex recent-col__main">
          <a href="#" class="recent-col__img">
            <img :src="require(`../assets/image/main/recent/${recent.img}.png`)" alt="">
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