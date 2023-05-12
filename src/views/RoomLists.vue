<template>
  <div class="container">

    <the-crumbs
      :rooms="rooms"
    />
    <div class="rooms">
        <div class="rooms__title">Список комнат</div>
        <div class="rooms__grid">
            <div
                    class="rooms__grid-box"
                    v-for="room in dataRooms"
                    :key="room.id"
            >
                <a href="">
                  <img :src="require(`@/assets/image/rooms/${room.img}.png`)" alt="">
                  <p>{{ room.name }}</p>
                </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import TheCrumbs from "@/components/TheCrumbs.vue";
import {dataRooms} from "@/const/data-rooms";
import {rooms} from '@/const/bread-crumbs/rooms'

export default {
    data(){
      return {
          dataRooms,
          rooms
      }
    },
    name: "RoomLists",
    components:{TheCrumbs}
}
</script>

<style scoped>

</style>