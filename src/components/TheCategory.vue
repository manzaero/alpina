<template>
   <div class="popular">
     <div class="container">
       <div class="d-flex justify-content-between">
         <div class="d-flex__catalog">Популярные категории</div>
         <a href="#" class="d-flex__all">
           <p class="d-flex__products">Все категории</p>
           <div class="d-flex__line"/>
         </a>
       </div>
       <div class="d-flex d-flex__mt list-unstyled">
         <div class="col">
           <a href="#">
             <div class="form">
              <img class="form__img" src="../assets/image/main/category/stul.png" alt="">
             </div>
             <p class="text-params">Стулья</p>
           </a>
         </div>
         <div class="col">
           <a>
             <div class="form">
              <img class="form__img" src="../assets/image/main/category/stol.png" alt="">
             </div>
             <p>Стулья</p>
           </a>
         </div>
         <div class="col">
           <a>
             <div class="form">
              <img class="form__img" src="../assets/image/main/category/krovat.png" alt="">
             </div>
             <p>Стулья</p>
           </a>
         </div>
         <div class="col">
           <a>
             <div class="form">
              <img class="form__img" src="../assets/image/main/category/divan.png" alt="">
             </div>
             <p>Стулья</p>
           </a>
         </div>
         <div class="col">
           <a>
             <div class="form">
              <img class="form__img" src="../assets/image/main/category/kreslo.png" alt="">
             </div>
             <p>Стулья</p>
           </a>
         </div>

       </div>
     </div>
   </div>
</template>

<script>
export default {
  name: "ThePopular"
}
</script>

<style scoped>

</style>