<template>
  <the-title/>
  <the-catalog/>
  <the-category :categories="categories"/>
  <the-furniture/>
  <the-offer/>
</template>

<script>
import TheCategory from "@/components/TheCategory";
import TheTitle from "@/components/TheTitle";
import TheCatalog from "@/components/catalog/TheCatalog";
import TheFurniture from "@/components/furniture/TheFurniture";
import TheOffer from "@/components/TheOffer";
import {catValue} from "@/const/data-value";
export default {
  name: 'HomeView',
  data(){
    return {
      categories:catValue
    }
  },
  components: {
    TheFurniture,
    TheCatalog,
    TheTitle,
    TheCategory,
    TheOffer
  }
}
</script>
