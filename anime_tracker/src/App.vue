<script lang="ts">
import AppBar from "@/components/AppBar.vue";
import { defineComponent, ref } from 'vue';
import DataCards from "@/components/DataCards.vue";

import { IAppModel } from "@/models/AppViewModel";

export default defineComponent({
  components: {
    AppBar,
  },
  setup() {
    const appModel = ref<IAppModel>({});
    return {
      appModel,
      DataCards,
    };
  },
});
</script>

<template>
  <v-app>
    <AppBar :appModel="appModel" @update:appModel="newModel => appModel = newModel"></AppBar>
    <router-view :appModel="appModel"/>
  </v-app>
</template>
