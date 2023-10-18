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
  setup(props) {

    return {

    }

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
      <v-img class="align-end image" height="300" :src="overview.images.jpg.large_image_url" cover></v-img>

      <a :href="overview.url" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;">
        <v-card-title class="text-white title">
          {{ overview.title }}
          <div>{{ overview.title_english }}</div>
          <div>{{ overview.title_japanese }}</div>
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

.image {
  object-fit: cover;
  height: 200px;
}

.title {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
