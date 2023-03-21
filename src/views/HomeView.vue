<template>
  <the-title/>
  <the-catalog/>
  <the-category :categories="categories"/>
  <the-furniture/>
  <the-offer/>
  <the-collection :theCollection="theCollection" :icons="icons"/>
</template>

<script>
import TheCategory from "@/components/TheCategory";
import TheTitle from "@/components/TheTitle";
import TheCatalog from "@/components/catalog/TheCatalog";
import TheFurniture from "@/components/furniture/TheFurniture";
import TheOffer from "@/components/TheOffer";
import TheCollection from "@/components/TheCollection";
import {catValue} from "@/const/data-value";
import {collection} from "@/const/data-value";
import {iconsCollection} from "@/const/data-value";
export default {
  name: 'HomeView',
  data(){
    return {
      categories:catValue,
      theCollection: collection,
      icons: iconsCollection
    }
  },
  components: {
    TheFurniture,
    TheCatalog,
    TheTitle,
    TheCategory,
    TheOffer,
    TheCollection
  }
}
</script>
