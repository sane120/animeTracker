<script lang="ts">
import AppBar from "@/components/AppBar.vue";
import { defineComponent, ref } from 'vue';
import DataTable from "@/components/DataTable.vue";
import DataCards from "@/components/DataCards.vue";

import { IAppModel } from "@/models/AppViewModel";

export default defineComponent({
  components: {
    AppBar,
    DataTable,
    DataCards,
  },
  setup() {
    const appModel = ref<IAppModel>({});
    return {
      appModel,
    };
  },
});
</script>

<template>
  <v-app>
    <AppBar :appModel="appModel" @update:appModel="newModel => appModel = newModel"></AppBar>
    <router-view />
    <DataTable :appModel="appModel"></DataTable>
    <DataCards :appModel="appModel"></DataCards>
  </v-app>
</template>
