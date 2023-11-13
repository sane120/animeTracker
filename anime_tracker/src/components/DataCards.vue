<script lang="ts">
import { APIHandler } from '@/models/APIHandler';
import { IAppModel } from '@/models/AppViewModel';
import { LocalStorageHandler } from '@/models/LocalStorageHandler';
import { IOverview } from '@/models/animeModels';
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  props: {
    appModel: {
      required: true,
      type: Object as PropType<IAppModel>,
    },
  },

  setup() {
    const apiHandler = new APIHandler();
    const isHovered = ref<number | null>(null);
    const toggleHover = (mal_id?: number | null) => {
      isHovered.value = mal_id ?? null;
    };

    const addToFavorites = (mal_id: number) => {
      const favorites = getFavorites();
      favorites.push(mal_id);
      saveFavorites(favorites);
      updateBackendFavorites(favorites);
    };

    const removeFromFavorites = (mal_id: number) => {
      const favorites = getFavorites();
      const index = favorites.indexOf(mal_id);
      if (index !== -1) {
        favorites.splice(index, 1);
        saveFavorites(favorites);
        updateBackendFavorites(favorites);
      }
    };

    const getFavorites = () => {
      return LocalStorageHandler.getLocalStorage('favorites');
    };

    const saveFavorites = (favorites: number[]) => {
      LocalStorageHandler.saveLocalStorage('favorites', favorites);
    };

    const updateBackendFavorites = (favorites: number[]) => {
      apiHandler.sendFavoritesData(favorites)
        .then((result: boolean) => {
          if (result) {
            console.log('POST Favorites have been sent successfully');
          } else {
            console.error('POST Favorites have not been sent');
          }
        });
    };

    const isFavorite = (mal_id: number) => {
      return getFavorites().includes(mal_id);
    };

    const toggleFavorites = (overview: IOverview) => {
      if (isFavorite(overview.mal_id)) {
        removeFromFavorites(overview.mal_id);
        overview.isFavorite = false;
      } else {
        addToFavorites(overview.mal_id);
        overview.isFavorite = true;
      }
    };

    return {
      isHovered,
      toggleHover,
      addToFavorites,
      removeFromFavorites,
      isFavorite,
      toggleFavorites,
    };
  },
});
</script>

<template>
  <div class="card-container">
    <v-card class="mx-2 card" v-for="overview in appModel.animeList" :key="overview.mal_id">
      <v-dialog v-model="overview.dialog" activator="parent" width="auto">
        <v-card>
          <v-card-text>
            {{ overview.synopsis }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="overview.dialog = false">Close Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-img class="align-end image" height="300" width="300" :src="overview.images.jpg.large_image_url" cover>
        <v-btn
          class="top-right-button"
          size="small"
          color="surface-variant"
          variant="text"
          @mouseover="toggleHover(overview.mal_id)"
          @mouseout="toggleHover(null)"
          :icon="overview.isFavorite ? 'mdi-heart' : (isHovered === overview.mal_id ? 'mdi-heart' : 'mdi-heart-outline')"
          @click.stop="toggleFavorites(overview);"
        ></v-btn>
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
  flex-direction: row;
  margin-top: 50px;
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
