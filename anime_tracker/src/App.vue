<script lang="ts">
  import AppBar from "@/layouts/default/AppBar.vue";
  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {

    },
    components:{
      AppBar
    }
  })
</script>

<template>
  <v-app>
    <AppBar></AppBar>
    <router-view />
  </v-app>
</template>
