<script lang="ts">

import { Overviews } from '@/models/animeModels';
import { APIHandler } from '@/models/APIHandler';
import { IAppModel } from '@/models/AppViewModel';
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  props: {
    appModel: {
      required: true,
      type: Object as PropType<IAppModel>
    },
  },
  setup(props, { emit }) {

    const searchField = ref("");
    const resultList = ref<Overviews>([]);
    const apiHandler = new APIHandler();
    const handleSearch = async () => {

      console.log(searchField.value);
      resultList.value = await apiHandler.getAnimeSearch(searchField.value);
      console.log(resultList.value);
      if (resultList.value) {
        emit('update:appModel', { ...props.appModel, animeList: resultList.value });
      }
    };

    return {
      handleSearch,
      searchField
    };
  },
});
</script>
<template>
  <v-app-bar color="secondary">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title class="title" @click="$router.push('/')">Anitrack
    </v-app-bar-title>
    <v-form @submit.prevent="handleSearch">
      <v-container>
        <v-text-field v-model="searchField" label="Search for an anime..." required></v-text-field>
      </v-container>
    </v-form>
    <v-spacer></v-spacer>
    <v-btn to="/two" icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn to="/three" icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<style scoped>
.title {
  font-family: Roboto;
  font-size: 36px;
  cursor: pointer;
}

.title:hover {
  opacity: .5;
}
</style>
@/models/animeModels
