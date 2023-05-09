<template>
  <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">
      <div class="menu-box__flex">
        <div class="menu-box__main">
          <li><a class="menu__item" href="#">Каталог</a></li>
          <li><a class="menu__item" href="#">Комнаты</a></li>
          <li><a class="menu__item" href="#">Дизайн-проекты</a></li>
          <li><a class="menu__item" href="#">Мебель на заказ</a></li>
          <hr>
          <li class="menu__flex">
            <div class="menu__icon">
              <img src="@/assets/image/header/user.png" alt="">
            </div>
            <span class="menu__item" href="#">Вход / Регистрация</span>
          </li>
          <hr>
          <li><a class="menu__contacts" href="#">Санкт-Петербург <i class="arrow down"></i></a></li>
          <li><a class="menu__contacts" href="#">О нас</a></li>
          <li><a class="menu__contacts" href="#">Наши салоны</a></li>
          <li><a class="menu__contacts" href="#">Оплата и доставка</a></li>
          <li><a class="menu__contacts" href="#">Для бизнеса</a></li>
        </div>
        <div class="menu-box__room">
          <li><a class="menu__item" href="#">Комнаты</a></li>
          <the-room />
        </div>
        <div class="menu__catalog" >
          <li class="menu-box__cat" v-for="item in header" :key="item.id">
            <div class="menu__flex">
              <div class="menu__icon">
                <img :src="require(`@/assets/image/header/${item.img}.png`)" alt="">
              </div>
              <span class="menu__name">{{ item.name }}</span>
            </div>
            <hr>
          </li>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import TheRoom from "@/components/header/TheRoom";
export default {
  inject:['header'],
  name: "TheBurger",
  components: {TheRoom}
}
</script>

<style scoped>

</style>