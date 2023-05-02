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
import {stickMenu, stickButton} from "@/const/stick";
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