<template>
  <div class="container">
      <the-stick
              :stickMenu="stickMenu"
              :stickButton="stickButton"
      />
  </div>
</template>

<script>
import TheStick from "@/components/stick/TheStick.vue";
import {stickMenu} from "@/const/stick-menu";
import {stickButton} from "@/const/stick-button";
export default {
    data(){
        return {
            stickMenu,
            stickButton
        }
    },
    components:{TheStick},
    name: "StickView"
}
</script>

<style scoped>

</style>