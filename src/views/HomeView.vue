<template>
  <the-title/>
  <the-catalog/>
  <the-category :categories="categories"/>
</template>

<script>
import TheCategory from "@/components/TheCategory";
import TheTitle from "@/components/TheTitle";
import TheCatalog from "@/components/catalog/TheCatalog";
import {catValue} from "@/const/data-value";
export default {
  name: 'HomeView',
  data(){
    return {
      categories:catValue
    }
  },
  components: {
    TheCatalog,
    TheTitle,
    TheCategory
  }
}
</script>
