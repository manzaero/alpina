<template>

            <div class="offer__box">
                <button class="offers__btn">{{ sale }}</button>
                <a href="#" class="offers__hover">
                    <img class="offers__heart" :src="require(`../../assets/image/main/offer/${png}.png`)" alt="">
                </a>
                <div class="offers__img">
                    <a href="#">
                        <img class="offer__img-main" :src="require(`../../assets/image/main/offer/${img}.png`)" alt="">
                    </a>
                </div>
            </div>
            <div class="d-flex offers__info">
                <div class="col">
                    <a href="#" class="offers__title">{{ name }}</a>
                </div>
                <div class="col-md-auto">
                    <div class="offers__price">
                        <p>{{ price }} руб.</p>
                        <span v-if="sale.length">{{ oldPrice }}</span>
                    </div>
                </div>
            </div>
            <span class="offers__size">{{size}}</span>
            <div class="offers__d-flex">
                <div class="row">
                    <a href="#" class="offers__col">
                        <img class="offers__png" :src="require(`../../assets/image/main/offer/${icon1}.png`)" alt="">
                    </a>
                    <a href="#" class="offers__col">
                        <img class="offers__png"  :src="require(`../../assets/image/main/offer/${icon2}.png`)" alt="">
                    </a>
                    <a href="#" class="offers__col">
                        <img class="offers__png" :src="require(`../../assets/image/main/offer/${icon3}.png`)" alt="">
                    </a>
                    <a href="#" class="offers__col">
                        <span>+5</span>
                    </a>
                </div>
                <a href="#" v-if="cart.length === 0" class="offers__cart">
                    <svg class="offers__svg-hover" width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.152 5.9806H13.7418V5.01709C13.7418 2.67781 11.8391 0.775 9.49993 0.775C7.16082 0.775 5.25835 2.67783 5.25835 5.01709V5.9806H2.84633C2.33976 5.9806 1.91678 6.36712 1.87149 6.8718C1.87149 6.8718 1.87149 6.87181 1.87149 6.87181L0.588608 21.1587L0.588604 21.1587C0.564074 21.4325 0.65568 21.7038 0.841128 21.9066C1.02657 22.1094 1.28873 22.2249 1.56344 22.2249H17.435H17.435H17.4351H17.4351H17.4351H17.4351H17.4351H17.4351H17.4351H17.4352H17.4352H17.4352H17.4352H17.4352H17.4352H17.4353H17.4353H17.4353H17.4353H17.4353H17.4353H17.4353H17.4354H17.4354H17.4354H17.4354H17.4354H17.4354H17.4355H17.4355H17.4355H17.4355H17.4355H17.4355H17.4356H17.4356H17.4356H17.4356H17.4356H17.4356H17.4356H17.4357H17.4357H17.4357H17.4357H17.4357H17.4357H17.4358H17.4358H17.4358H17.4358H17.4358H17.4358H17.4359H17.4359H17.4359H17.4359H17.4359H17.4359H17.436H17.436H17.436H17.436H17.436H17.436H17.4361H17.4361H17.4361H17.4361H17.4361H17.4361H17.4362H17.4362H17.4362H17.4362H17.4362H17.4362H17.4363H17.4363H17.4363H17.4363H17.4363H17.4363H17.4364H17.4364H17.4364H17.4364H17.4364H17.4364H17.4365H17.4365H17.4365H17.4365H17.4365H17.4365H17.4365H17.4366H17.4366H17.4366H17.4366H17.4366H17.4366H17.4367H17.4367H17.4367H17.4367H17.4367H17.4367H17.4368H17.4368H17.4368H17.4368H17.4368H17.4368H17.4368H17.4369H17.4369H17.4369H17.4369H17.4369H17.4369H17.437H17.437H17.437H17.437H17.437C17.9777 22.2249 18.4158 21.7867 18.4158 21.2461L18.4158 21.2456C18.4157 21.1949 18.4117 21.1444 18.404 21.0949L17.1269 6.8718C17.0816 6.36713 16.6586 5.9806 16.152 5.9806ZM7.21585 5.01709C7.21585 3.75753 8.24075 2.7325 9.50003 2.7325C10.7594 2.7325 11.7844 3.75755 11.7844 5.01709V5.9806H7.21585V5.01709ZM15.2573 7.9381L16.3644 20.2675H2.63405L3.74116 7.9381H5.25835V9.06101C5.25835 9.60153 5.69644 10.0398 6.2371 10.0398C6.77775 10.0398 7.21585 9.60153 7.21585 9.06101V7.9381H11.7844V9.06101C11.7844 9.60153 12.2225 10.0398 12.7632 10.0398C13.3038 10.0398 13.7419 9.60153 13.7419 9.06101V7.9381H15.2573Z" fill="black" stroke="white" stroke-width="0.45"/>
                    </svg>
                </a>
                <button v-else class="offers__btn-in-cart">В корзине</button>
            </div>
</template>

<script>
export default {
    props:{
        sale:String,
        png: String,
        img: String,
        name: String,
        price: String,
        oldPrice: String,
        size: String,
        icon1: String,
        icon2: String,
        icon3: String,
        cart: String
    },
    name: "StickCard"
}
</script>

<style scoped>

</style>