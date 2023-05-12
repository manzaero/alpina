<template>
  <div class="flex-column">
    <header>
      <slot name="header"></slot>
    </header>
      <slot/>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
import {header} from "@/const/data-header";
export default {
  provide: {header},
  name: "TheMain"
}
</script>

<style scoped>

</style>