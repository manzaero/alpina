<template>
  <the-title/>
  <the-catalog/>
  <the-category :categories="categories"/>
  <the-furniture/>
  <the-offer/>
  <the-collection :theCollection="theCollection"/>
  <the-production />
  <the-recent :theRecent="theRecent"/>
</template>

<script>
import TheCategory from "@/components/TheCategory";
import TheTitle from "@/components/title/TheTitle";
import TheCatalog from "@/components/catalog/TheCatalog";
import TheFurniture from "@/components/furniture/TheFurniture";
import TheOffer from "@/components/TheOffer";
import TheCollection from "@/components/TheCollection";
import TheProduction from "@/components/production/TheProduction";
import TheRecent from "@/components/TheRecent";
import {catValue, collection, production, recent, header} from "@/const/data-value";
export default {
  provide:{production},
  name: 'HomeView',
  data(){
    return {
      categories:catValue,
      theCollection: collection,
      theRecent: recent
    }
  },
  components: {
    TheFurniture,
    TheCatalog,
    TheTitle,
    TheCategory,
    TheOffer,
    TheCollection,
    TheProduction,
    TheRecent
  }
}
</script>
