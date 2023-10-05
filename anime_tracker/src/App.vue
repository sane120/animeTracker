<script lang="ts">
import AppBar from "@/components/AppBar.vue";
import { defineComponent, ref } from 'vue';
import Card from '@/components/Card.vue';
import {  OverviewArray } from "./models/animeSearch";
import { APIHandler } from './models/APIHandler';

export default defineComponent({
  emits: ['onSearch'],
  components: {
    AppBar,
  },
  setup() {
    const animeList = ref<OverviewArray>([]);
    const apiHandler = new APIHandler();

    const handleSearch = async (value: string) => {
      animeList.value = await apiHandler.getAnimeSearch(value);
      console.log(animeList.value);
    };

    return {
      animeList,
      handleSearch,
    };
  },
});
</script>
<template>
  <v-app>
    <AppBar @onSearch="handleSearch"></AppBar>
    <router-view />
    <div class="cards">
    </div>
  </v-app>
</template>

