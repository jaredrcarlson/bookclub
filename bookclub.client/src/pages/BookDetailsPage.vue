<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div v-if="book" class="row mt-4">
          <div class="col-5 d-flex justify-content-center">
            <img class="img-fluid" :src="book.imgUrlLarge" alt="">
          </div>
          <div class="col-7 h-100">
            <div class="d-flex flex-column h-100">
              <div class="fs-2 fw-bold">{{book.title}} {{ book.subtitle }}</div>
              <div class="fs-5">By <span v-for="author in book.authors" :key="author">{{ author }}</span></div>
              <div class="mt-2 d-flex justify-content-between">
                <div>
                  <div class="text-center fw-bold">
                    <div class="text-light light-blue-bg rounded px-2">Score</div>
                    <div>8.3/10</div>
                    <small class="text-muted">150 Users</small>
                  </div>
                </div>
                <div class="d-flex justify-content-around">
                  <div class="text-center fw-bold">
                    <div class="text-light light-blue-bg rounded px-2">Your Rating</div>
                    <div>Not Rated</div>
                  </div>
                  <div class="text-center fw-bold mx-2">
                    <div class="text-light light-blue-bg rounded px-2">Progress</div>
                    <div>Reading</div>
                  </div>
                  <div>
                    <button class="btn orange-btn">Add To List</button>
                  </div>
                </div>
              </div> 
              <div class="mt-2 fs-5">Description</div>
              <small class="pe-3">{{ book.description }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3 g-1">
      <div class="col-3 text-center selectable">
        <div class="text-light px-2" :class="{ 'bg-dark': selectedTab != 'reading', 'dark-blue-bg': selectedTab == 'reading'}" @click="selectedTab = 'reading'">Clubs Reading This Book</div>
      </div>
      <div class="col-4 text-center selectable">
        <div class="text-light px-2" :class="{ 'bg-dark': selectedTab != 'finished', 'dark-blue-bg': selectedTab == 'finished'}" @click="selectedTab = 'finished'">Clubs That Have Read This Book</div>
      </div>
      <div class="col-2 text-center selectable">
        <div class="text-light px-2"  :class="{ 'bg-dark': selectedTab != 'reviews', 'dark-blue-bg': selectedTab == 'reviews'}" @click="selectedTab = 'reviews'">User Reviews</div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="dark-blue-bg p-2">
          <div v-if="selectedTab == 'reading'" class="bg-dark">
            <div class="text-light p-2">Clubs Reading Book</div>
          </div>
          <div v-else-if="selectedTab == 'finished'" class="bg-dark">
            <div class="text-light p-2">Clubs Finished Book</div>
          </div>
          <div v-else class="bg-dark">
            <div class="text-light p-2">User Reviews</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { booksService } from '../services/BooksService.js';
import { computed, ref, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';

export default {
  setup(){
    const route = useRoute()
    const selectedTab = ref('reading')

    async function getBookDetails(gbId) {
      try {
        await booksService.setDetailsPageBook(gbId)
      } catch (error) {
        Pop.error(error.message)
      }
    }

    async function getClubsCurrentlyReadingBook() {

    }

    async function getClubsFinishedReadingBook() {

    }

    async function getUserReviews() {

    }

    watchEffect(() => {
      getBookDetails(route.params.gbId)
      getClubsCurrentlyReadingBook()
      getClubsFinishedReadingBook()
      getUserReviews()
    })

    return {
      book: computed(() => AppState.detailsPageBook),
      selectedTab
    }
  }
}
</script>


<style lang="scss" scoped>

</style>