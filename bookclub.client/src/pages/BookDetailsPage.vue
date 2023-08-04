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
          <div v-if="selectedTab == 'reading'" class="bg-dark">
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
          <div v-else-if="selectedTab == 'planned'" class="bg-dark">
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
            <div class="px-3 py-2">
              <button class="btn orange-btn" type="button" data-bs-toggle="collapse" data-bs-target="#bookReviewForm" aria-expanded="false" aria-controls="bookReviewForm">
                Add Review
              </button>
            </div>             
            <div class="collapse" id="bookReviewForm">
              <div class="card mx-3">
                <div class="card-body">
                  <form @submit.prevent="createReview()">
                    <div class="row mb-3">
                      <div class="col-3 d-flex align-items-center">
                        <img class="user-img" :src="user.picture" :alt="user.name" :title="user.name">
                        <div class="ms-2 fw-bold">{{ user.name }}</div>
                      </div>
                      <div class="col-6">
                      </div>
                      <div class="col-2">
                        <div class="my-0 ps-2 form-text">Recommendation</div>
                        <select v-model="reviewData.rating" class="form-select" aria-label="Rating" required>
                          <option value="Recommended">Recommend</option>
                          <option value="Mixed Feelings">Mixed Feelings</option>
                          <option value="Not Recommended">Not Recommended</option>
                        </select>
                      </div>
                      <div class="col-1"></div>
                    </div>
                    <div class="row">
                      <div class="col-11">
                        <textarea v-model="reviewData.content" class="mb-2 pb-2 form-control" rows="3" placeholder="add review..." required></textarea>
                      </div>
                      <div class="col-1">
                        <div class="pt-2 btn-custom">
                          <button type="submit" class="btn orange-btn"><i class="mdi mdi-send-circle-outline fs-1"></i></button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div v-if="!userReviews.length">
              <div class="p-2">There are no reviews for this book.</div>
            </div>
            <div v-else>
              <div v-for="(review, index) in userReviews" :key="index" class="col-12">
                    <div class="card mx-3">
                      <div class="card-body dark-blue-bg text-light">
                          <div class="row mb-3">
                            <div class="col-3 d-flex align-items-center">
                              <img class="user-img" :src="review.creator?.picture" :alt="review.creator?.name" :title="review.creator?.name">
                              <div class="ms-2">
                                <div class="fw-bold">Creator: {{ review.creator?.name }}</div>
                                <small class="">Posted {{ review.createdAt.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) }}</small>
                              </div>
                            </div>
                            <div class="col-6">
                            </div>
                            <div class="col-3">
                              <div v-if="review.rating == 'Recommended'">
                                <div class="d-flex align-items-center justify-content-center text-light bg-primary rounded">
                                  <i class="mdi mdi-star fs-4"></i>
                                  <div class="ms-1">{{ review.rating }}</div>
                                </div>
                              </div>
                              <div v-else-if="review.rating == 'Mixed Feelings'">
                                <div class="d-flex align-items-center justify-content-center text-light bg-secondary rounded">
                                  <i class="mdi mdi-star-half-full fs-4"></i>
                                  <div class="ms-1">{{ review.rating }}</div>
                                </div>
                              </div>
                              <div v-else-if="review.rating == 'Not Recommended'">
                                <div class="d-flex align-items-center justify-content-center text-dark bg-danger rounded">
                                  <i class="mdi mdi-star-outline fs-4"></i>
                                  <div class="ms-1">{{ review.rating }}</div>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          <div class="row">
                            <div class="col-12">
                              <div class="px-2">
                                {{ review.content }}
                              </div>
                            </div>
                            
                          </div>
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
import { bookReviewsService } from '../services/BookReviewsService.js';
import { clubsService } from '../services/ClubsService.js';

export default {
  setup(){
    const route = useRoute()
    const selectedTab = ref('reading')
    const reviewData = ref({gbId: route.params.gbId})
    
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
        await bookReviewsService.setBookDetailsPageReviews(gbId)
      } catch (error) {
        Pop.error(error.message)
      }
    }

    async function createReview() {
      try {
        await bookReviewsService.createBookReview(reviewData.value)
        reviewData.value = {gbId: route.params.gbId}
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
      selectedTab,
      reviewData,
      user: computed(() => AppState.account),
      book: computed(() => AppState.bookDetailsPage.book),
      clubsPlanned: computed(() => AppState.bookDetailsPage.clubs.planned),
      clubsReading: computed(() => AppState.bookDetailsPage.clubs.reading),
      clubsFinished: computed(() => AppState.bookDetailsPage.clubs.finished),
      userReviews: computed(() => AppState.bookDetailsPage.userReviews),
      createReview
    }
  }
}
</script>


<style lang="scss" scoped>
.user-img {
  height: 6vh;
  width: 6vh;
  // border-style: solid;
  // border-width: 2px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

</style>