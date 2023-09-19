<script lang="ts">

import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {

    },
    components:{

    }
  })
</script>
<template>
  <v-app-bar
          color="#C08497">
          <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </template>

          <v-app-bar-title class="title" @click="$router.push('/')"
            >Anitrack
          </v-app-bar-title>
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
  color: #FEF5EF;
  cursor: pointer;
}
.title:hover {
  opacity: .5;
}

</style>
