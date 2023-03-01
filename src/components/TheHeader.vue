<template>
  <div class="navbar">
    <nav class="navbar-expand-lg navbar__header">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
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
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar__left">
            <li class="nav-item ">
              <a class="nav-link active nav-link__secondHeader" href="#">Каталог</a>
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
                <img class="navbar-nav__secondMa" src="../assets/image/logo.png" alt="">
              </a>
            </li>
          </ul>
          <ul class="navbar-nav d-flex mb-lg-0 list-unstyled">
            <li class="nav-item ">
              <a class="nav-link" href="#">Andrew Shapin</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <img src="../assets/image/header/Chats.png" alt="">
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link nav-link__mm" href="#">
                <img src="../assets/image/header/Group.png" alt="">
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                <img src="../assets/image/header/Bask.png" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped>

</style>