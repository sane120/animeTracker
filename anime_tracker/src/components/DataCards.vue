<script lang="ts">
import { IAppModel } from '@/models/AppViewModel';
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  props: {
    appModel: {
      required: true,
      type: Object as PropType<IAppModel>
    },
  },
  setup(props) {
    const isHovered = ref<number | null>(null);

    const toggleHover = (mal_id?: number | null) => {
      isHovered.value = mal_id ?? null;
    };

    const addToFavorites = (mal_id: number) => {
      const favorites = getFavorites();
      favorites.push(mal_id);
      saveFavorites(favorites);
    };

    const getFavorites = () => {
      const favorites = localStorage.getItem('favorites');
      return favorites ? JSON.parse(favorites) : [];
    };

    const saveFavorites = (favorites: number[]) => {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    const isFavorite = (mal_id: number) => {
      return getFavorites().includes(mal_id);
    };

    return {
      isHovered,
      toggleHover,
      addToFavorites,
      isFavorite,
    };
  },
});
</script>

<template>
  <div class="card-container">
    <v-card
      class="mx-2 card"
      v-for="overview in appModel.animeList"
      :key="overview.mal_id"
    >
      <v-img class="align-end image" height="300" width="300" :src="overview.images.jpg.large_image_url" cover>
        <v-btn class="top-right-button" size="small" color="surface-variant" variant="text" @mouseover="toggleHover(overview.mal_id)" @mouseout="toggleHover(null)" :icon="isFavorite(overview.mal_id) ? 'mdi-heart' : (isHovered === overview.mal_id ? 'mdi-heart' : 'mdi-heart-outline')" @click="addToFavorites(overview.mal_id)"></v-btn>
      </v-img>

      <a :href="overview.url" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;">
        <v-card-title class="text-primary title">
          {{ overview.title }}
          <div>{{ overview.title_english ?? '.' }}</div>
        </v-card-title>
      </a>
    </v-card>
  </div>
</template>






<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  max-width: 300px;
  margin: 10px;
  border-radius: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
.card:hover {
  transform: translateY(1px);
}


.image {
  object-fit: cover;
  height: 200px;
}

.title {
  background-color: #C08497;
  opacity: 0.7;
  padding: 10px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.top-right-button {
  position: absolute;
  top: 5px;
  right: 10px;
  font-size: 1.2rem;
}
</style>
