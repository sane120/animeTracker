<script lang="ts">

import { IAppModel } from '@/models/AppViewModel';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    appModel: {
      required: true,
      type: Object as PropType<IAppModel>
    },
  },
  setup() {
    const headers = [
      { title: 'Title', key: 'title' },
      { title: 'Synopsis', key: 'synopsis'}
    ];
    return {
      headers
    }

  },
});
</script>
<template>
  <v-data-table :headers="headers" :items="appModel.animeList" :items-per-page="100" class="stylish-data-table">
  </v-data-table>
</template>
<style scoped>
.v-data-table.elevation-1 {
  max-height: 80vh;
  max-width: 80vw;
  margin: auto;
  overflow: auto;
}



.v-app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
