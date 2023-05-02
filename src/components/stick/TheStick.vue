<template>
      <div class="stick">
          <div class="navigation-page">
            <span>
              <router-link to="/">Главная</router-link>
              /
              <router-link to="/catalogue">Каталог</router-link>
              /
              <router-link to="/catalogue/stick">Мебель</router-link>
            </span>
          </div>
          <div class="catalogue__title">Мебель</div>
          <div class="stick__menu">
              <div class="stick__menu-card" v-for="stick in stickMenu" key="stick.id">
                  <router-link to="">
                    <div class="stick__menu-img">
                        <img :src="require(`../../assets/image/stick/${stick.img}.png`)" alt="">
                    </div>
                    <div class="stick__menu-name">
                        <span>{{ stick.name }}</span>
                    </div>
                  </router-link>
              </div>
          </div>
          <div class="stick__filter">
              <div class="stick__filter-box">
                <div class="stick__filter-button">
                    <button class="btn stick__button"  v-for="button in stickButton" key="button.id">{{ button.name }}</button>
                </div>
                <a href="#" class="d-flex__all">
                    <p class="stick__clear-title">очистить</p>
                    <div class="stick__clear"/>
                </a>
              </div>
              <div class="stick__filter-drop">
                  <div class="dropdown">
                      <button class="dropbtn">Сначала дорогие  <i class="arrow down"></i></button>
                      <div class="dropdown-content">
                          <a href="#">Сначала дешёвые</a>
                          <a href="#">Сначала дорогие</a>
                          <a href="#">Сначала популярные</a>
                          <a href="#">По размеру скидки</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
</template>

<script>
export default {
    props:['stick-menu', 'stick-button'],
    name: "StickView"
}
</script>

<style scoped>

</style>