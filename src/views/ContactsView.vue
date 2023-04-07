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
        <div class="contacts__way-position"
             v-for="{tab, name} in tabs"
             :key="tab"
             >
          <a class="contacts__way-list" @click="component = tab">{{ name }}</a>
          <div :class="['contacts__list-border', {active: component===tab}]"></div>
        </div>
      </div>
      <hr>
    </div>
    <component :is="component"></component>
  </div>
</template>

<script>
import TheList from "@/components/contacts/TheList";
import TheMap from "@/components/contacts/TheMap";
export default {
  data(){
    return {
      tabs: [
        {
          tab: 'TheList',
          name: 'Список'
        },
        {
          tab: 'TheMap',
          name: 'На карте'
        }
      ],
      component:'TheList'
    }
  },
  name: "ContactsView",
  components:{TheList, TheMap}
}
</script>