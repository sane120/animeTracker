<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    searchQuery: String,
  },
  setup(props, { emit }) {
    const searchField = ref("");

    const handleSearch = () => {
      console.log("handleSearch called with query:", searchField.value);

      // Emit the submit event with the search query
      emit("submit", searchField.value);
    };

    return {
      searchField,
      handleSearch,
    };
  },
});
</script>
<template>
  <v-app-bar color="#C08497">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title class="title" @click="$router.push('/')"
      >Anitrack</v-app-bar-title
    >
    <form class="search-box" @submit.prevent="handleSearch">
      <input
        v-model="searchField"
        type="search"
        class="search-field"
        placeholder="Search for an anime..."
        required
      />
    </form>
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
  color: #fef5ef;
  cursor: pointer;
}
.title:hover {
  opacity: 0.5;
}
</style>
