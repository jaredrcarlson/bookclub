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
      <div class="col-12">
        <div style="overflow-x: auto;">
          <table id="books">
            <tr>
              <th class="ps-2">
                Title
              </th>
              <th class="ps-2">
                Progress
              </th>
              <th class="ps-2">
                Rating
              </th>
              <th class="ps-2">
                Options
              </th>
            </tr>
            <tr v-for="book in currentBooks" :key="book.id">
                <BookListItem :bookProp="book" />
            </tr>
            <tr v-for="book in plannedBooks" :key="book.id">
                <BookListItem :bookProp="book" />
            </tr>
            <tr v-for="book in finishedBooks" :key="book.id">
              <BookListItem :bookProp="book" />
            </tr>
          </table>
        </div>
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
        books: computed(() => AppState.books),
        finishedBooks: computed(() => {
          let finishedBooks = AppState.books.filter(b => b.status == 'finished')
          return finishedBooks
        }),
        plannedBooks: computed(() => {
          let plannedBooks = AppState.books.filter(b => b.status == 'planned')
          return plannedBooks
        }),
        currentBooks: computed(() => {
          let currentBooks = AppState.books.filter(b => b.status == 'reading')
          return currentBooks
        }),
      };
  },
}
</script>


<style lang="scss" scoped>
table{
  width: 95%;
}

#books th{
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: lighter;
}

#books th, #books td{
  border-bottom: 1px solid #8f8f8f;
  padding: 7px;
}

.sub-text-style{
  font-weight: 100;
  font-size: smaller;
}

.large-text-style{
  font-size:large;
  font-weight: 600;
}

.status-text-style{
  font-size: large;
}

.author-text-style{
  font-size: smaller;
  font-weight: 500;
}
</style>