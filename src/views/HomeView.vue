<template>
  <the-title/>
  <the-catalog/>
  <the-popular/>
</template>

<script>
import ThePopular from "@/components/TheCategory";
import TheTitle from "@/components/TheTitle";
import TheCatalog from "@/components/catalog/TheCatalog";
export default {
  name: 'HomeView',
  components: {
    TheCatalog,
    TheTitle,
    ThePopular
  }
}
</script>
