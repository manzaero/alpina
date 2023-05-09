<template>
      <div class="stick">
          <the-modal
                  v-if="isModal"
                  @closeModal="closeModalForm"
          />
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
          <div class="stick__menu grid">
              <div class="stick__menu-card" v-for="stick in stickMenu" key="stick.id">
                  <router-link to="">
                    <div class="stick__menu-img">
                        <img :src="require(`@/assets/image/stick/${stick.img}.png`)" alt="">
                    </div>
                    <div class="stick__menu-name">
                        <span>{{ stick.name }}</span>
                    </div>
                  </router-link>
              </div>
          </div>
          <div class="stick__filter-icon">
              <div @click="showModal = true">
                  <img src="@/assets/image/stick/filter.png" class="filter-icon__filter" alt="">
              </div>
              <the-modal/>
              <div class="dropdown">
                  <p class="dropbtn">
                      <img src="@/assets/image/stick/sort.png" class="filter-icon__sort" alt="">
                  </p>
                  <div class="dropdown-content">
                      <a href="#">Сначала дешёвые</a>
                      <a href="#">Сначала дорогие</a>
                      <a href="#">Сначала популярные</a>
                      <a href="#">По размеру скидки</a>
                  </div>
              </div>
          </div>
          <div class="stick__filter">
              <div class="stick__filter-box">
                <div class="stick__filter-button">
                    <button class="btn stick__button"  v-for="button in stickButton" key="button.id">{{ button.name }}</button>
                    <button class="btn stick__button" @click="showTheModal">Все фильтры</button>
                </div>
                <a href="#" class="d-flex__all">
                    <p class="stick__clear-title">очистить</p>
                    <div class="stick__clear"/>
                </a>
              </div>
              <div class="stick__filter-drop">
                  <div class="dropdown">
                      <button class="dropbtn">
                          Сначала дорогие  <i class="arrow down"></i></button>
                      <div class="dropdown-content">
                          <a href="#">Сначала дешёвые</a>
                          <a href="#">Сначала дорогие</a>
                          <a href="#">Сначала популярные</a>
                          <a href="#">По размеру скидки</a>
                      </div>
                  </div>
              </div>
          </div>
          <div class="stick__card-box">
              <div class="row row-cols-4 offer">
                  <div class="col offers" v-for="item in stickCard" :key="item.id">
                      <stick-card
                              :sale="item.sale"
                              :png="item.png"
                              :img="item.img"
                              :name="item.name"
                              :price="item.price"
                              :oldPrice="item.oldPrice"
                              :size="item.size"
                              :icon1="item.icon1"
                              :icon2="item.icon2"
                              :icon3="item.icon3"
                              :cart="item.cart"
                              />
                  </div>
              </div>
          </div>
          <div class="stick__ticker">
              <span>16 из 250 товаров</span>
          </div>
          <div class="stick__more">
              <button class="btn stick__more-button">
                  Показать ещё
              </button>
          </div>
          <div class="stick__detailed">
            <div class="stick__detailed-title">
                <p>seo text</p>
            </div>
              <div class="stick__detailed-shadow">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                   </p>
                  <div class="stick__detailed-heavy" v-if="!active">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                  <div
                          class="stick__details-drop"
                          v-if="active">
                      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dicta dolor dolore dolorum eum harum labore nihil repudiandae voluptate? Blanditiis dolorem excepturi magni porro, quia rerum sed sit unde veritatis!
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum dolorem impedit incidunt, magnam numquam! Beatae dignissimos, enim et expedita fugit iusto necessitatibus numquam officiis ratione rerum tempore, tenetur voluptatibus.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cupiditate dolor fugiat inventore, reprehenderit sequi. Officia, quas rem. Eum pariatur perspiciatis quaerat quisquam. Minus nulla numquam quas ratione repudiandae voluptatum.
                  </div>
                  <div class="stick__more">
                      <button
                              class="btn stick__more-button"
                              @click="active = !active"
                      >
                          {{ !active ? 'Подробнее' : 'Свернуть'}}
                      </button>
                  </div>
              </div>
          </div>
      </div>
</template>

<script>
import StickCard from "@/components/stick/StickCard.vue";
import TheModal from "@/components/stick/TheModal.vue";
import {stickCard} from "@/const/stick";

export default {
    data(){
      return {
          stickCard,
          active: false,
          showModal: true,
          isModal: false
      }
    },
    props:['stick-menu', 'stick-button'],
    methods:{
      showTheModal(){
        this.isModal = true
      },
        closeModalForm(){
          this.isModal = false
        }
    },
    name: "StickView",
    components:{StickCard, TheModal}
}
</script>

<style scoped>

</style>