<script lang="ts">
import { IAppModel } from '@/models/PizzaViewModel';
import { defineComponent, PropType, ref, onMounted, computed } from 'vue';
import { APIHandler } from '@/models/APIHandler';
import { PizzaOverviews, IPizzaOverview } from '@/models/pizzaModels';

export default defineComponent({
  props: {
    appModel: {
      required: true,
      type: Object as PropType<IAppModel>
    },
  },
  setup(props) {
    const headers = [
      { title: 'id', key: 'id' },
      { title: 'name', key: 'name'},
      { title: 'isGlutenFree', key: 'isGlutenFree'}
    ];

    const pizzaData = ref<PizzaOverviews | null>(null);

    onMounted(async () => {
      const apiHandler = new APIHandler();
      pizzaData.value = await apiHandler.getPizzaData();
    });

    const formattedPizzaData = computed(() => {
      if (pizzaData.value) {
        return pizzaData.value.map((item: IPizzaOverview) => ({
          id: item.id,
          name: item.name,
          isGlutenFree: item.isGlutenFree ? 'GlutenFree' : 'Does have gluten',
        }));
      }
      return [];
    });

    return {
      headers,
      formattedPizzaData,
    };
  },
});
</script>




<template>
  <v-data-table :headers="headers" :items="formattedPizzaData" :items-per-page="100" class="stylish-data-table">
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
