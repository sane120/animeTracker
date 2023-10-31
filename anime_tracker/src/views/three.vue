<script lang="ts" >
import { IAppModel } from '@/models/AppViewModel';
import { PropType, defineComponent, ref } from 'vue';
import DataCards from "@/components/DataCards.vue";

export default defineComponent({
  components: {
    DataCards,
  },
  props: {
    appModel: {
    type: Object as PropType<IAppModel>,
    required: true
  }},

    setup() {
    return {
      DataCards
    };
  }});
</script>
<template>
  <router-link to="/two" text="TWO"/>
  <DataCards :appModel="appModel"></DataCards>
</template>
