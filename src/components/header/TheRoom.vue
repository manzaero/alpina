<template>
  <ul class="list-unstyled">
    <div class="drop-position" v-for="data in dropMenu" :key="data.id">
      <img :src="require(`../../assets/image/header/${data.img}.png`)" alt="">
      <button class="btn btn__drop-btn">{{ data.name }}</button>
    </div>
  </ul>
</template>

<script>
import {dataValue} from "@/const/data-value";
export default {
  data(){
    return {
      dropMenu: dataValue
    }
  },
  name: "TheCatalog"
}
</script>