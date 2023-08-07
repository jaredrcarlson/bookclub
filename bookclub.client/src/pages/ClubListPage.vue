<template>
  <div>
    <div>
      <p class="fs-1 fw-semibold mt-2">
        Club's Booklist
      </p>
    </div>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col" class="fw-light">Title</th>
            <th scope="col" class="fw-light">Progress</th>
            <th scope="col" class="fw-light">Rating</th>
          </tr>
        </thead>
        <tbody class="fw-semibold">
          <!-- FIXME v-for all of the books in a list. Convert the table row into a card component. Add a router link on each row to go to that book's detail page. -->
          <tr scope="row">
            
          </tr>
        </tbody>
      </table>
    </div>
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