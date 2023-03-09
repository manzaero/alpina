<template>
  <div class="container-fluid container__drop">
    <div class="container">
      <div class="drop-menu row">
        <div class="col col__menu">
          <ul class="list-unstyled list-unstyled__padding">
            <li class="drop-menu__title"><strong>Столы и стулья</strong></li>
            <li class="drop-menu__title">Столы и столики</li>
            <li class="drop-menu__title">Стулья</li>
            <li class="drop-menu__title">Обеденные группы</li>
          </ul>
        </div>
        <div class="col col__drop-menu">
          <ul class="list-unstyled">
            <li class="drop-menu__title"><strong>Мягкая мебель</strong></li>
            <li class="drop-menu__title">Диваны</li>
            <li class="drop-menu__title">Диван-кровать</li>
            <li class="drop-menu__title">Модульные диваны</li>
            <li class="drop-menu__title">Офисные диваны</li>
            <li class="drop-menu__title">Кресла</li>
            <li class="drop-menu__title">Банкетники</li>
            <li class="drop-menu__title">Пуфы</li>
          </ul>
        </div>
        <div class="col col__drop-menu">
          <ul class="list-unstyled">
            <li class="drop-menu__title"><strong>Шкафы</strong></li>
            <li class="drop-menu__title">Платяные шкафы</li>
            <li class="drop-menu__title">Угловые шкафы</li>
            <li class="drop-menu__title">Шкафы-купе</li>
            <li class="drop-menu__title">Полки на стену</li>
            <li class="drop-menu__title">Стеллажи</li>
            <li class="drop-menu__title">Этажерки</li>
            <li class="drop-menu__title">Книжные шкафы</li>
          </ul>
        </div>
        <div class="col col__drop-menu">
          <ul class="list-unstyled">
            <li class="drop-menu__title"><strong>Кухни</strong></li>
            <li class="drop-menu__title">Выставочные образцы кухонь</li>
            <li class="drop-menu__title">Готовые кухни</li>
            <li class="drop-menu__title">Модульные кухни</li>
            <li class="drop-menu__title">Кухни на заказ</li>
          </ul>
        </div>
        <div class="col col__drop-menu">
          <ul class="list-unstyled">
            <li class="drop-menu__title"><strong>Кровати и матрасы</strong></li>
            <li class="drop-menu__title">Кровати</li>
            <li class="drop-menu__title">Матрасы</li>
            <li class="drop-menu__title">Основания</li>
            <li class="drop-menu__title">Покрывала и наматрасники</li>
            <li class="drop-menu__title">Спальные гарнитуры</li>
          </ul>
        </div>
        <div class="col">
          <ul class="list-unstyled">
            <div class="drop-position" v-for="data in dropMenu" :key="data.id">
              <img :src="require(`../../assets/image/header/${data.img}.png`)" alt="">
              <button class="btn btn__drop-btn">{{ data.name }}</button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {dropMenu} from "@/const/drop-menu";

export default {
  data(){
    return {
      dropMenu
    }
  },
  name: "TheDropdown"
}
</script>

<style lang="scss" scoped>

</style>