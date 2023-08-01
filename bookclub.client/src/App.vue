<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Cinzel+Decorative&family=Concert+One&family=Forum&family=Indie+Flower&family=Kalam:wght@300&family=Kumar+One+Outline&family=Shadows+Into+Light&family=Shrikhand&family=Staatliches&display=swap" rel="stylesheet">
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}

.navbar-font{
  font-family: 'Shadows Into Light', cursive;
}

.ghost-bg{
  background-color: #EBF2FA;
}

.dark-blue-bg{
  background-color: #1D3354;
}

.orange-bg{
  background-color: #FB5607;
}

.orange-btn{
  background-color: #FB5607;
  color: black;
}

.orange-btn:hover{
  border-color: #FB5607;
  color: #FB5607;
}

.orange-text{
  color: #FB5607;
}

.light-blue-bg{
  background-color: #5084D2;
}

.light-blue-btn{
  background-color: #5084D2;
  color: black;
}

.light-blue-btn:hover{
  border-color: #5084D2;
  color: #5084D2;
}

</style>
