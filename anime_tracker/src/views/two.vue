<script lang="ts">
import { IAppModel } from '@/models/AppViewModel';
import { PropType, defineComponent, ref } from 'vue';
import DataTable from "@/components/DataTable.vue";

export default defineComponent({
  components: {
    DataTable,
  },
  props: {
    appModel: {
    type: Object as PropType<IAppModel>,
    required: true
  }},
  setup() {
    return {
      DataTable
    };
  }});
</script>

<template>
  <div>
    <router-link to="/three" text="THREE"/>
    <DataTable :appModel="appModel"></DataTable>
  </div>
</template>

