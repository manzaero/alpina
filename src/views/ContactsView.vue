<template>
  <div class="container">
    <div class="contacts">
      <div class="navigation-page">
        <span>
          <router-link to="/">Главная</router-link>
          /
          <a href="">Наши салоны</a>
        </span>
      </div>
      <div class="contacts__title">
        Наши салоны
      </div>
      <div class="contacts__button-city">
        <button class="btn">Тюмень</button>
        <button class="btn">Челябинск</button>
        <button class="btn">Москва</button>
        <button class="btn">Сыктывкар</button>
        <button class="btn">Сочи</button>
      </div>
      <div class="contacts__way">
        <div class="contacts__way-position">
          <a class="contacts__way-list" href="">Списком</a>
          <div class="contacts__list-border"></div>
        </div>
        <div class="contacts__map-position">
          <a class="contacts__way-map" href="">На карте</a>
          <div class="contacts__map-border"></div>
        </div>
      </div>
      <hr>
    </div>
    <the-list/>
  </div>
</template>

<script>
import TheList from "@/components/contacts/TheList";
export default {
  name: "ContactsView",
  components:{TheList}
}
</script>

<style scoped>

</style>