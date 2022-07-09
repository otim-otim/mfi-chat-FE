<template>
  <v-bottom-navigation
    :value="value"
    color="primary"
  >
    <button>
      <span>Recents</span>

      <v-icon>mdi-history</v-icon>
    </button>

    <button>
      <span>Favorites</span>

      <v-icon>mdi-heart</v-icon>
    </button>

    <button>
      <span>Nearby</span>

      <v-icon>mdi-map-marker</v-icon>
    </button>
  </v-bottom-navigation>
</template>


<script>
  export default {
    data: () => ({ value: 1 }),
  }
</script>