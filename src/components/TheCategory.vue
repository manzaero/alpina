<template>
   <div class="popular">

     <div class="container">
       <div class="d-flex justify-content-between">
         <div class="d-flex__catalog">Популярные категории</div>
         <a href="#" class="d-flex__all">
           <p class="d-flex__products">Вся категория</p>
           <div class="d-flex__line"/>
         </a>
       </div>
       <div class="d-flex d-flex__mt list-unstyled">
         <div class="d-flex__grid">
           <a v-for="category in categories" :key="category.id">
             <div class="form">
              <img class="form__img" :src="require(`@/assets/image/main/category/${category.img}.png`)" alt="">
             </div>
             <p class="text-params">{{ category.name }}</p>
           </a>
         </div>
       </div>
       <a href="#" class="d-flex__flex-all">
         <p class="d-flex__products">Вся категория</p>
         <div class=""/>
       </a>
     </div>
   </div>
</template>

<script>
export default {
  props:{
    categories:{
      type: Array,
      required: true
    }
  },
  name: "ThePopular"
}
</script>

<style scoped>

</style>