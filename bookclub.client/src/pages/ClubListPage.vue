<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <p class="fs-1 fw-semibold mt-2">
          Club's Booklist
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 my-3">
        <BookListCard />
      </div>
    </div>
  </div>
</template>


<script>
import { computed, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import { useRoute } from 'vue-router';
import Pop from '../utils/Pop.js';
import { booksService } from '../services/BooksService.js';

export default {
    setup() {
        const route = useRoute();
        async function getBooksByClubId() {
            try {
                const clubId = route.params.clubId;
                await booksService.getBooksByClubId(clubId);
            }
            catch (error) {
                Pop.error(error.message);
            }
        }
        watchEffect(() => {
            getBooksByClubId();
        });
        return {
            route,
            selectedClub: computed(() => AppState.selectedClub),
            books: computed(() => AppState.books)
        };
    },
}
</script>


<style lang="scss" scoped>

</style>