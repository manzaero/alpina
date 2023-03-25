<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar-contact">
         <div class="navbar-contact__city">
           <a href="#">Санкт-Петербург <i class="arrow down"></i></a>
         </div>
         <a class="navbar-contact__tel" href="tel:88001207440">8 800 120 74 40</a>
      </div>
      <a class="navbar-contact__media-tel" href="tel:88001207440">8 800 120 74 40</a>
      <div class="navbar-contact__write">
        <a href="#">Позвонить или написать <i class="arrow down"></i></a>
      </div>
      <div class="navbar-contact__support">
        <a href="#">О нас</a>
        <a href="#">Наши салоны</a>
        <a href="#">Оплата и доставка</a>
        <a href="#">Для бизнеса</a>
      </div>
    </div>
  </div>
  <hr>
  <div class="navbar">
    <div class="container">
      <div class="navbar-contact__market">
        <div class="navbar-contact__burger">
          <the-burger/>
        </div>
        <div class="navbar-contact__catalog">
          <a href="#">Каталог</a>
        </div>
        <div class="navbar-contact__catalog">
          <a href="#">Комнаты</a>
        </div>
        <div class="navbar-contact__catalog">
          <a href="#">Дизайн-проекты</a>
        </div>
        <div class="navbar-contact__catalog">
          <a href="#">Мебель на заказ</a>
        </div>
        <a href="#" class="navbar-contact__img">
          <img src="../../assets/image/logo.png" alt="">
        </a>
      </div>
      <div class="navbar-contact__personal">
        <a class="navbar-contact__user" href="#">Andrew Shapin</a>
        <a href="#" class="navbar-contact__position">
          <img src="../../assets/image/header/Chats.png" alt="">
          <img class="navbar-contact__frame" src="../../assets/image/header/Frame.png" alt="">
        </a>
        <a href="#">
          <img src="../../assets/image/header/Group.png" alt="">
        </a>
        <a href="#">
          <img src="../../assets/image/header/Bask.png" alt="">
        </a>
      </div>
    </div>
  </div>
  <div class="navbar">
    <div class="container container__end">
      <div class="navbar-contact__bottom">
        <div class="navbar-contact__category">
          <a href="#">Мебель</a>
        </div>
        <div class="navbar-contact__category">
          <a href="#">Мебельная фурнитура и комплектующие</a>
        </div>
        <div class="navbar-contact__category">
          <a href="#">Товары для дома</a>
        </div>
        <div class="navbar-contact__category">
          <a href="#">Товары для дома</a>
        </div>
        <div class="navbar-contact__category">
          <a href="#">Акции</a>
        </div>
      </div>
      <div class="navbar-contact__search">
        <input class="navbar-contact__search-form" placeholder="Белый стул" type="search">
        <img class="navbar-contact__search-icon" src="../../assets/image/header/search.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import TheDropdown from "@/components/header/TheDropdown";
import TheBurger from "@/components/header/TheBurger";
export default {
  data(){
    return {
      show: false
    }
  },
  name: "TheHeader",
  components: {
    TheDropdown,
    TheBurger
  }
}
</script>

<style scoped>

</style>