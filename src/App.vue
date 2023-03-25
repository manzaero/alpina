<template>
  <the-main>
    <template v-slot:header>
      <the-header/>
    </template>
<!--      <router-view/>-->
    <template v-slot:footer>
<!--      <the-footer/>-->
    </template>
  </the-main>
</template>

<script>
import TheHeader from "@/components/header/TheHeader";
import TheMain from "@/components/TheMain";
import TheFooter from "@/components/TheFooter";
export default {
  components: {
    TheFooter,
    TheMain,
    TheHeader
  }
}
</script>