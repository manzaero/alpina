<template>
  <div class="container">
    <div class="d-flex justify-content-between">
      <div class="d-flex__catalog">О нас</div>
    </div>
    <div class="about__slide">
      <the-slide-prod/>
    </div>
    <div class="d-flex justify-content-between">
      <div class="d-flex__catalog">Наша миссия —</div>
    </div>
    <div class="about__title">
      <p>
        делать качественную мебель доступной <br> выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться
      </p>
    </div>
    <div class="d-flex justify-content-between">
      <div class="d-flex__catalog">Цифры</div>
    </div>
    <div class="d-flex about__col">
      <div class="col">
        <div class="bold">55 000 м2</div>
        <div class="text">производственная площадь фабрики Альпина
        </div>
      </div>
      <div class="col">
        <div class="bold">108</div>
        <div class="text">городов России,
          в которых установлена наша мебель
        </div>
      </div>
      <div class="col">
        <div class="bold">80 %</div>
        <div class="text">ассортимента изготавливается из массива дерева
        </div>
      </div>
      <div class="col">
        <div class="bold">10 000</div>
        <div class="text">возможных вариаций каждого стула фабрики доступно к заказу
        </div>
      </div>
      <div class="col">
        <div class="bold">> 73 000</div>
        <div class="text">интерьеров создано с помощью нашей мебелью
        </div>
      </div>
    </div>
    <div class="about__img">
      <div v-for="img in about" :key="img.id">
        <img :src="require(`@/assets/image/about/${img.src}.png`)" alt="">
      </div>
    </div>
    <div class="about__description">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aliquid architecto deserunt dolore dolorum eos esse et expedita illo minima modi odio, quasi quia quisquam rem sunt ut, voluptatum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aliquid architecto deserunt dolore dolorum eos esse et expedita illo minima modi odio, quasi quia quisquam rem sunt ut, voluptatum!
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aliquid architecto deserunt dolore dolorum eos esse et expedita illo minima modi odio, quasi quia quisquam rem sunt ut, voluptatum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aliquid architecto deserunt dolore dolorum eos esse et expedita illo minima modi odio, quasi quia quisquam rem sunt ut, voluptatum!
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aliquid architecto deserunt dolore dolorum eos esse et expedita illo minima modi odio, quasi quia quisquam rem sunt ut, voluptatum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aliquid architecto deserunt dolore dolorum eos esse et expedita illo minima modi odio, quasi quia quisquam rem sunt ut, voluptatum!
      </p>
    </div>
  </div>
</template>

<script>
import TheSlideProd from "@/components/production/TheSlideProd";
import {production} from "@/const/data-production";
import {about} from "@/const/data-about";
export default {
  provide:{production},
  components:{TheSlideProd},
  data(){
    return {about}
  }
}
</script>