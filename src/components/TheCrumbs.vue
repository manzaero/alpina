<template>
    <div class="bread">
            <div class="bread__crumbs">
                <span
                        v-for="room in rooms"
                        key="room.id"
                >
                    <router-link
                        :to="room.to"
                    >
                        {{ room.name }}
                        <span >/ </span>
                    </router-link>
                </span>
            </div>
    </div>
</template>

<script>
export default {
    props:{
        rooms:{
            id: String,
            to: String,
            name: String
        }
    },
    name: "BreadСrumbs"
}
</script>

<style scoped>

</style>