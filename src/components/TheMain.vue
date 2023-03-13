<template>
  <div class="wrap d-flex flex-column">
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
export default {
  name: "TheMain"
}
</script>

<style scoped>

</style>