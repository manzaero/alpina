<template>
    <div class="bread">
            <div class="bread__crumbs">
                <span
                        v-for="room in rooms"
                        :key="room.id"
                >
                    <router-link
                        :to="room.to"
                    >
                        {{ room.name }}
                        <span v-if="room.id < 2">/ </span>
                    </router-link>
                </span>
            </div>
    </div>
</template>

<script>
export default {
    props:{
        rooms: {
            type: String,
            require :true
        }
    },
    name: "BreadСrumbs"
}
</script>

<style scoped>

</style>