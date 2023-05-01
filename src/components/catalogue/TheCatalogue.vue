<template>
    <div class="catalogue__card">
        <div class="catalogue__card-item" v-for="item in catalogue" :key="item.id">
            <div class="catalogue__card-img">
                <img :src="require(`../../assets/image/catalogue/${item.img}.png`)" alt="">
            </div>
            <ul>
                <li>{{ item.name[0] }}</li>
                <li>{{ item.name[1] }}</li>
                <li>{{ item.name[2] }}</li>
                <li>{{ item.name[3] }}</li>
                <li>{{ item.name[4] }}</li>
                <li>{{ item.name[5] }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:['catalogue'],
    name: "TheCatalogue"
}
</script>

<style scoped>

</style>