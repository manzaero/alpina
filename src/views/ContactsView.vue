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
        <a :class="['contacts__button-city-btn', {active: locations === tab}]"
           v-for="{name, tab} in location"
           :key="tab" @click="locations = tab">{{ name }}</a>
      </div>
      <component :is="locations"/>
    </div>
  </div>
</template>

<script>
import TheCity from "@/components/contacts/TheCity";
export default {
  data(){
    return {
      location:[
        {
          name: 'Тюмень',
          tab:'TheCity'
        },
        {
          name: 'Челябинск',
          tab: 'TheChelyabinsk'
        },
        {
          name: 'Москва',
          tab: 'TheMoskow'
        },
        {
          name: 'Сыктывкар',
          tab: 'TheSiktivkar'
        },
        {
          name: 'Сочи',
          tab: 'TheSochi'
        }
      ],
      locations:'TheCity'
    }
  },
  name: "ContactsView",
  components:{TheCity}
}
</script>