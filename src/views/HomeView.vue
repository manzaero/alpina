<template>
  <the-title/>
  <the-catalog/>
</template>

<script>

import TheTitle from "@/components/title/TheTitle";
import TheCatalog from "@/components/TheCatalog";
export default {
  name: 'HomeView',
  components: {
    TheCatalog,
    TheTitle
  }
}
</script>
