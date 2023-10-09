<script lang="ts">
import AppBar from "@/components/AppBar.vue";
import { defineComponent, onMounted } from 'vue';
import DataTable from "@/components/DataTable.vue";
import { AppViewModel } from "./models/AppViewModel";

export default defineComponent({

  components: {
    AppBar,
    DataTable
  },
  data(){}
  ,
  setup() {
    const viewModel = new AppViewModel({});
    return {
      viewModel
    };
  },
});
</script>
<template>
  <v-app>
    <AppBar :appViewModel="viewModel"></AppBar>
    <router-view />
    <DataTable :appViewModel="viewModel"></DataTable>
  </v-app>
</template>

