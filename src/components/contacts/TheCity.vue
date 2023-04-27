<template>
  <div class="contacts__way">
    <div class="contacts__way-position" v-for="{tab, name} in tabs" :key="tab">
      <a class="contacts__way-list" @click="component = tab">{{ name }}</a>
      <div :class="['contacts__list-border', {active: component === tab}]"></div>
    </div>
  </div>
  <hr>
  <component :is="component"/>
</template>

<script>
import TheMap from "@/components/contacts/TheMap";
import TheList from "@/components/contacts/TheList";
export default {
  data(){
    return {
      tabs:[
        {
          tab: 'TheList',
          name: 'Список'
        },
        {
          tab: 'TheMap',
          name: 'На карте'
        }
      ],
      component: 'TheList'
    }
  },
  name: "TheLocation",
  components:{TheMap, TheList}
}
</script>