<script lang="ts">
import AppBar from "@/components/AppBar.vue";
import { defineComponent, ref } from "vue";
import Card from "@/components/Card.vue";

export default defineComponent({
  emits: ["submit"],
  components: {
    AppBar,
  },
  setup() {
    const searchQuery = ref("");
    const animeList = ref([]);
    const isSearching = ref(false); //flag to prevent multiple searches

    const handleSearch = async () => {
      if (isSearching.value) {
        // If a search is already in progress, do not execute another one
        return;
      }
      console.log("handleSearch called with query:", searchQuery.value);
      isSearching.value = true;
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(
            searchQuery.value
          )}`
        );
        const data = await response.json();
        console.log(data);

        animeList.value = data.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        isSearching.value = false;
      }
    };

    return {
      searchQuery,
      animeList,
      handleSearch,
    };
  },
});
</script>
<template>
  <v-app>
    <AppBar :searchQuery="searchQuery" @submit="handleSearch"></AppBar>
    <router-view />
    <div class="cards"></div>
  </v-app>
</template>
