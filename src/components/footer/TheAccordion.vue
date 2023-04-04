<template>
  <div class="half list-unstyled">
    <div class="tab">
      <input id="tab-four" type="radio" name="tabs2">
      <label for="tab-four">Каталог</label>
      <hr>
      <div class="tab-content">
        <li><a class="nav-link nav-link__title" href="">Акции</a></li>
        <li><a class="nav-link nav-link__title" href="">Мебель</a></li>
        <li><a class="nav-link nav-link__title" href="">Список комнат</a></li>
        <li><a class="nav-link nav-link__title" href="">Товары для дома</a></li>
        <li><a class="nav-link nav-link__title" href="">Фурнитура и комплектующие</a></li>
        <li><a class="nav-link nav-link__title" href="">Плитка, керамогранит и мозаика</a></li>
      </div>
    </div>
    <div class="tab">
      <input id="tab-five" type="radio" name="tabs2">
      <label for="tab-five">Покупателю</label>
      <hr>
      <div class="tab-content">
        <li><a class="nav-link nav-link__title" href="">Мебель на заказ</a></li>
        <li><a class="nav-link nav-link__title" href="">Дизайн-проекты</a></li>
        <li><a class="nav-link nav-link__title" href="">Наши салоны</a></li>
        <li><a class="nav-link nav-link__title" href="">Оплата и доставка</a></li>
        <li><a class="nav-link nav-link__title" href="">О нас</a></li>
        <li><a class="nav-link nav-link__title" href="">Для бизнеса</a></li>
      </div>
    </div>
    <div class="tab">
      <input id="tab-six" type="radio" name="tabs2">
      <label for="tab-six">Контакты</label>
      <hr>
      <div class="tab-content">
        <ul class="list-unstyled">
          <li>
            <div class="col__contacts">
              <br>
              <p>Единая справочная:
                <br>
                <strong>8 800 700 40 24</strong> <br>
                Звонок по России бесплатный.
                <br>
                Режим работы: c 02:00 до 23:00 (МСК).</p>
            </div>
          </li>
          <li>
            <br>
          </li>
          <li class="col__social">
            <p>Присоединяйтесь к нам в социальных сетях</p>
          </li>
          <ul class="col d-flex mb-lg-0 list-unstyled">
            <li class="nav-item">
              <a class="nav-link nav-link__footerIcon" target="_blank" href="https://instagram.com">
                <img src="../../assets/image/footer/instagram.png" alt="">
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link nav-link__footerIcon" target="_blank" href="https://youtube.com">
                <img src="../../assets/image/footer/youtube.png" alt="">
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link__footerIcon" target="_blank" href="https://pinterest.com">
                <img src="../../assets/image/footer/Pint.png" alt="">
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link__footerIcon" target="_blank" href="#">
                <img src="../../assets/image/footer/Group.png" alt="">
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link__footerIcon" target="_blank" href="https://vk.com">
                <img src="../../assets/image/footer/vk.png" alt="">
              </a>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "TheAccordion"
}
</script>

<style scoped>
h1 {
  text-align: center;
}
.half {
  float: left;
  width: 100%;
  padding: 0 1em;
}
.tab {
  position: relative;
  margin-bottom: 1px;
  width: 100%;
  overflow: hidden;
}
.tab input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.tab label {
  position: relative;
  display: block;
  padding: 0 0 0 1em;
  font-weight: bold;
  line-height: 3;
  cursor: pointer;
}
.tab-content {
  max-height: 0;
  overflow: hidden;
  -webkit-transition: max-height .35s;
  -o-transition: max-height .35s;
  transition: max-height .35s;
}
.blue .tab-content {
  background: #3498db;
}
.tab-content p {
  margin: 1em;
}
/* :checked */
.tab input:checked ~ .tab-content {
  max-height: 100vh;
}
/* Icon */
.tab label::after {
  position: absolute;
  right: 0;
  top: 0;
  display: block;
  width: 3em;
  height: 3em;
  line-height: 3;
  text-align: center;
  -webkit-transition: all .35s;
  -o-transition: all .35s;
  transition: all .35s;
}
.tab input[type=checkbox] + label::after {
  content: "+";
}
.tab input[type=radio] + label::after {
  content: "\25B4";
}
.tab input[type=checkbox]:checked + label::after {
  transform: rotate(315deg);
}
.tab input[type=radio]:checked + label::after {
  transform: rotateX(180deg);
}
.tab-content li {
  margin: 0 auto;
}
</style>