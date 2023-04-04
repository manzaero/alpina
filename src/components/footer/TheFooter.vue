<template>
  <footer class="footer">
    <hr>
    <div class="container  container__paddingFooter">
      <div class="row">
        <div class="footer__accordion">
          <the-accordion/>
        </div>
        <div class="col footer__hide">
          <ul class="list-unstyled">
            <li class="col__header">
              <a class="nav-link" href="">Каталог</a>
            </li>
            <li><a class="nav-link nav-link__title" href="">Акции</a></li>
            <li><a class="nav-link nav-link__title" href="">Мебель</a></li>
            <li><a class="nav-link nav-link__title" href="">Список комнат</a></li>
            <li><a class="nav-link nav-link__title" href="">Товары для дома</a></li>
            <li><a class="nav-link nav-link__title" href="">Фурнитура и комплектующие</a></li>
            <li><a class="nav-link nav-link__title" href="">Плитка, керамогранит и мозаика</a></li>
          </ul>
        </div>
        <div class="col footer__hide">
          <ul class="list-unstyled">
            <li class="col__header">
              <a class="nav-link" href="">Покупателю</a>
            </li>
            <li><a class="nav-link nav-link__title" href="">Мебель на заказ</a></li>
            <li><a class="nav-link nav-link__title" href="">Дизайн-проекты</a></li>
            <li><a class="nav-link nav-link__title" href="">Наши салоны</a></li>
            <li><a class="nav-link nav-link__title" href="">Оплата и доставка</a></li>
            <li><a class="nav-link nav-link__title" href="">О нас</a></li>
            <li><a class="nav-link nav-link__title" href="">Для бизнеса</a></li>
          </ul>
        </div>
        <div class="col footer__hide">
          <ul class="list-unstyled">
            <li class="col__header">
              <router-link to="/contact" class="nav-link">Контакты</router-link>
            </li>
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
        <div class="col">
          <ul class="list-unstyled">
            <li class="col__header">
              <a class="nav-link" href="">Принимаем к оплате</a>
            </li>
            <li>
              <img src="../../assets/image/footer/card.png" alt="">
            </li>
            <li class="col__opinion">
              <p>Нам важно ваше мнение</p>
            </li>
            <li>
              <button type="button" class="btn__settings">Написать нам</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr>
    <div class="container">
      <div class="list-unstyled row__footerEnd">
        <div class="col__footerWidth">
          <li>&copy 2020 Alpina Market. All rights reserved</li>
        </div>
        <div class="col__href">
          <a class="nav-link__footerPolitics" href="#">Политика конфиденциальности</a>
        </div>
        <div class="col__contacts">
          <p>Developed by Legacystudio</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import TheAccordion from "@/components/footer/TheAccordion";
export default {
  name: "TheFooter",
  components: {TheAccordion}
}
</script>

<style scoped>

</style>