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
              <div class="fs-5">By <span>{{ book.authors.join(', ') }}</span></div>
              <div class="mt-2 d-flex justify-content-between">
                <div>
                  <div class="text-center fw-bold me-1">
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
        <div class="text-light px-2 pt-1" :class="{ 'bg-dark': selectedTab != 'reading', 'dark-blue-bg': selectedTab == 'reading'}" @click="selectedTab = 'reading'">Clubs Reading This Book</div>
      </div>
      <div class="col-3 text-center selectable">
        <div class="text-light px-2 pt-1" :class="{ 'bg-dark': selectedTab != 'planned', 'dark-blue-bg': selectedTab == 'planned'}" @click="selectedTab = 'planned'">Clubs Planning To Read This Book</div>
      </div>
      <div class="col-4 text-center selectable">
        <div class="text-light px-2 pt-1" :class="{ 'bg-dark': selectedTab != 'finished', 'dark-blue-bg': selectedTab == 'finished'}" @click="selectedTab = 'finished'">Clubs That Have Read This Book</div>
      </div>
      <div class="col-2 text-center selectable">
        <div class="text-light px-2 pt-1"  :class="{ 'bg-dark': selectedTab != 'reviews', 'dark-blue-bg': selectedTab == 'reviews'}" @click="selectedTab = 'reviews'">User Reviews</div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="dark-blue-bg p-2">
          <div v-if="selectedTab == 'planned'" class="bg-dark">
            <div v-if="!clubsPlanned.length">
              <div class="p-2">There are no clubs planning to read this book.</div>
            </div>
            <div v-else class="row">
              <div v-for="club in clubsPlanned" :key="club.id" class="col-4">
                <div class="card m-2">
                  <div v-for="(value, key, index) in club" :key="index" class="px-2">
                    <small><span class="fw-bold">{{ key }}: </span>{{ value }}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="selectedTab == 'reading'" class="bg-dark">
            <div v-if="!clubsReading.length">
              <div class="p-2">There are no clubs currently reading this book.</div>
            </div>
            <div class="row">
              <div v-for="club in clubsReading" :key="club.id" class="col-4">
                <div class="card m-2">
                  <div v-for="(value, key, index) in club" :key="index" class="px-2">
                    <small><span class="fw-bold">{{ key }}: </span>{{ value }}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="selectedTab == 'finished'" class="bg-dark">
            <div v-if="!clubsFinished.length">
              <div class="p-2">There are no clubs finished reading this book.</div>
            </div>
            <div v-else class="row">
              <div v-for="club in clubsFinished" :key="club.id" class="col-4">
                <div class="card m-2">
                  <div v-for="(value, key, index) in club" :key="index" class="px-2">
                    <small><span class="fw-bold">{{ key }}: </span>{{ value }}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="bg-dark">
            <div v-if="!userReviews.length">
              <div class="p-2">There are no reviews for this book.</div>
            </div>
            <div v-else>
              <div v-for="review in userReviews" :key="review.id" class="col-12">
                <div class="card m-2">
                  <div v-for="(value, key, index) in review" :key="index" class="px-2">
                    <small><span class="fw-bold">{{ key }}: </span>{{ value }}</small>
                  </div>
                </div>
              </div>
            </div>
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
import { clubsService } from '../services/ClubsService.js';

export default {
  setup(){
    const route = useRoute()
    const selectedTab = ref('reading')
    
    async function setBook(gbId) {
      try {
        await booksService.setBookDetailsPageBook(gbId)
      } catch (error) {
        Pop.error(error.message)
      }
    }

    async function setClubs(gbId, status) {
      try {
        await clubsService.setBookDetailsPageClubs(gbId, status)
      } catch (error) {
        Pop.error(error.message)
      }
    }
    
    async function setReviews(gbId) {
      try {
        // FIXME - Needs implemented
      } catch (error) {
        Pop.error(error.message)
      }
    }

    watchEffect(() => {
      setBook(route.params.gbId)
      setClubs(route.params.gbId, 'planned')
      setClubs(route.params.gbId, 'reading')
      setClubs(route.params.gbId, 'finished')
      setReviews(route.params.gbId)
    })

    return {
      book: computed(() => AppState.bookDetailsBook),
      clubsPlanned: computed(() => AppState.bookDetailsClubs.planned),
      clubsReading: computed(() => AppState.bookDetailsClubs.reading),
      clubsFinished: computed(() => AppState.bookDetailsClubs.finished),
      userReviews: computed(() => AppState.bookDetailsUserReviews),
      selectedTab
    }
  }
}
</script>


<style lang="scss" scoped>

</style>