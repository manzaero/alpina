<template>
  <div class="flex-column">
    <header>
      <slot name="header"></slot>
    </header>
    <content class="flex-fill container-fluid">
      <slot/>
    </content>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
import {header} from "@/const/data-value";
export default {
  provide: {header},
  name: "TheMain"
}
</script>

<style scoped>

</style>