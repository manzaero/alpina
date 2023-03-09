<template>
  <div class="navbar">
    <nav class="navbar-expand-lg navbar__header">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Санкт-Петербург
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><strong>8 800 700 40 24</strong></a>
          </li>
        </ul>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav__ma">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Позвонить или написать
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <ul class="navbar-nav d-flex mb-lg-0 list-unstyled ">
          <li class="nav-item ">
            <a class="nav-link nav-link__mm" href="#">О нас</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link__mm" href="#">Наши салоны</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link nav-link__mm" href="#">Оплата и доставка</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link__mm" href="#">Для бизнеса</a>
          </li>
        </ul>
      </div>
      </div>
  </nav>
    <hr class="hr">
    <nav class="navbar-expand-lg navbar__headerSecond">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar__left">
            <li class="nav-item ">
              <a class="nav-link active nav-link__secondHeader" href="#"><b>Каталог</b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link__secondHeader" href="#">Комнаты</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link__secondHeader" href="#">Дизайн-проект</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link__secondHeader" href="#">Мебель на заказ</a>
            </li>
          </ul>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img class="navbar-nav__secondMa" src="../../assets/image/logo.png" alt="">
              </a>
            </li>
          </ul>
          <ul class="navbar-nav d-flex mb-lg-0 list-unstyled">
            <li class="nav-item ">
              <a class="nav-link" href="#">Andrew Shapin</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <img src="../../assets/image/header/Chats.png" alt="">
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link nav-link__mm" href="#">
                <img src="../../assets/image/header/Group.png" alt="">
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                <img src="../../assets/image/header/Bask.png" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav class="navbar-expand-lg navbar__headerSecond">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar__downHeader">
            <li class="nav-item ">
              <a class="nav-link active nav-link__secondHeader " @click="show = !show" href="#">Мебель</a>
            </li>

            <transition name="slide-fade">
              <p v-if="show">
                <the-dropdown/>
              </p>
            </transition>
            <li class="nav-item">
              <a class="nav-link nav-link__secondHeader" href="#">Мебель, фурнитура и комплектующие</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link__secondHeader" href="#">Товары для дома</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link__secondHeader" href="#">Плитка, керамогранит и мозайка</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link__secondHeader" href="#">Акции</a>
            </li>
          </ul>
          <ul class="navbar-nav d-flex mb-lg-0 list-unstyled">
            <div class="input-group input-group-sm flex-nowrap input-group__search">
              <input type="text" class="form-control input-group__searchInput" placeholder="Белый стул" aria-label="Username" aria-describedby="addon-wrapping">
              <span class="input-group-text" id="addon-wrapping">
                <img src="../../assets/image/header/search.png" alt="">
              </span>
            </div>
          </ul>
        </div>
      </div>
    </nav>
    <hr class="hr" v-if="show">
  </div>
</template>

<script>
import TheDropdown from "@/components/header/TheDropdown";
export default {
  data(){
    return {
      show: false
    }
  },
  name: "TheHeader",
  components: {TheDropdown}
}
</script>

<style scoped>

</style>