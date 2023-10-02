<script lang="ts">
  import AppBar from "@/components/AppBar.vue";
  import { defineComponent } from 'vue';
  import Card from '@/components/Card.vue';
  import { ref } from 'vue';

  export default defineComponent({

    emits: ['submit'],

    setup() {
      const searchQuery = ref("");
      const animeList = ref([]);

      const handleSearch = async () => {
      console.log('handleSearch called');
      const response = await fetch(`https://api.jikan.moe/v4/anime?q=${searchQuery.value}`);
      const data = await response.json();
      console.log(data);
};

      return {
        Card,
        searchQuery,
        animeList,
        handleSearch,
      }
    },
    components:{
      AppBar
    }
  })
</script>

<template>
  <v-app>
    <AppBar @submit="handleSearch"></AppBar>
    <router-view />
    <div class="cards">
      {{ Card }}
    </div>"
  </v-app>
</template>
