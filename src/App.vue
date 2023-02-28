<template>
  <the-main>
    <template v-slot:header>
      <the-header/>
    </template>
  </the-main>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheMain from "@/components/TheMain";
export default {
  components: {
    TheMain,
    TheHeader
  }
}
</script>