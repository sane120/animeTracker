<script lang="ts">

import { Overviews } from '@/models/animeModels';
import { APIHandler } from '@/models/APIHandler';
import { IAppViewModel } from '@/models/AppViewModel';
import { defineComponent, ref, PropType, computed, watch } from 'vue';

export default defineComponent({
  props: {
    appViewModel: {
      required: true,
      type: Object as PropType<IAppViewModel>
    },
  },
  setup(props) {
    const appViewModel = computed(() => props.appViewModel);
    const localappViewModel = ref({ ...props.appViewModel });

    watch(
      appViewModel,
      (newVal: any) => {
        console.log("Data-Table");
        console.log(appViewModel.value.animeList);
        localappViewModel.value = { ...newVal };
      },
      { deep: true }
    );

  },
});
</script>
<template>
    <v-data-table
    :items="appViewModel.animeList"></v-data-table>
</template>
<style scoped>

</style>
