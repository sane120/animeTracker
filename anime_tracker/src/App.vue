<script lang="ts">
import AppBar from "@/components/AppBar.vue";
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    AppBar,
  },
  setup() {

  },
});
</script>
<template>
  <v-app>
    <AppBar></AppBar>
    <router-view />
  </v-app>
</template>

