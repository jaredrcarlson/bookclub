<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12">
        <h1 class="m-3">
          About the Club
        </h1>
      </div>
    </section>
  </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

export default {
  setup(){
    return {
      selectedClub: computed(() => AppState.selectedClub)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>