<template>
  <div class="container">
    <Navigation title="MY FAVORITES" />
    <FavoritesList />
  </div>
</template>

<script>
import Navigation from './common/Navigation'
import FavoritesList from './favorites/FavoritesList'

export default {
  components: {
    Navigation,
    FavoritesList
  }
}
</script>