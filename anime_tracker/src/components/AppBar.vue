<script lang="ts">

import { Overviews } from '@/models/animeModels';
import { APIHandler } from '@/models/APIHandler';
import { defineComponent, ref } from 'vue';
import { useTheme } from 'vuetify';

export default defineComponent({
  props: {
    searchQuery: String,
  },
  setup() {
    const searchField = ref("");

    const animeList = ref<Overviews>([]);
    const apiHandler = new APIHandler();
    const handleSearch = async () => {
      animeList.value = await apiHandler.getAnimeSearch(searchField.value);
      console.log(animeList.value);
    };

    return {
      animeList,
      handleSearch,
      searchField,
    };
  },
});
</script>
<template>
  <v-app-bar color="secondary">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title
      class="title" @click="$router.push('/')">Anitrack
    </v-app-bar-title>
    <v-form @submit.prevent="handleSearch">
    <v-container>
          <v-text-field
            v-model="searchField"
            label="Search for an anime..."
            required
          ></v-text-field>
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
