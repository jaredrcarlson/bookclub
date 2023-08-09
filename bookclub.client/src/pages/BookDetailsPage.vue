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
              <div class="fs-4 fw-bold">{{book.title}} {{ book.subtitle }}</div>
              <div class="fs-6">By <span>{{ book.author }}</span></div>
              
              <!-- SECTION SCORE / MY RATING / PROGRESS / BOOK LIST BUTTON -->
              <div class="mt-2 d-flex justify-content-between">
                <div>
                  <div class="text-center me-1">
                    <div class="text-light light-blue-bg rounded px-2">Score</div>
                    <div>{{ bookScore }}</div>
                    <small class="text-muted">{{ bookScoreUserCount }} Users</small>
                  </div>
                </div>
                <div v-if="user.id">
                  <div class="d-flex justify-content-around">
                    <div v-if="userHasThisBook" class="text-center pe-2">
                      <div class="text-light light-blue-bg rounded px-2">My Rating</div>
                      <select @change="updateUserBookRating()" v-model="userBookData.rating" class="form-select form-select-sm border-0 rounded-start shadow-none text-center" aria-label=".form-select-sm rating">
                          <option v-for="i in 11" :key="i" :value="i-1">{{ i-1 ? i-1 : 'Not Rated' }}</option>
                      </select>
                    </div>
                    <div v-if="userHasThisBook" class="text-center pe-2">
                      <div class="text-light light-blue-bg rounded px-2">Progress</div>
                      <select @change="updateUserBookStatus()" v-model="userBookData.status" class="form-select form-select-sm border-0 rounded-start shadow-none text-center" aria-label=".form-select-sm status">
                          <option value="planned">Planned</option>
                          <option value="reading">Reading</option>
                          <option value="finished">Finished</option>
                      </select>
                    </div>
                    <div class="d-flex justify-content-around">
                      <div class="me-2">
                        <button @click="openBookListsModal()" type="button" class="btn orange-btn">
                          <div class="d-flex align-items-center">
                            <i class="mdi mdi-list-status fs-5 pe-2"></i>
                            <div>Lists</div>
                          </div>
                        </button>
                      </div>
                      <!-- <div v-if="userHasThisBook">
                        <button @click="removeFromUserBookList()" type="button" class="btn btn-danger">
                          <i class="mdi mdi-trash-can-outline"></i>
                        </button>
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>

              <!-- SECTION BOOK DESCRIPTION -->
              <div class="mt-2 fs-5">Description</div>
              <small v-html="book.description" class="pe-3"></small>
            </div>
          </div>
        </div>
      </div>
    </div>

     <!-- SECTION BOOK CLUBS -->
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
            <div class="row py-2">
              <div v-for="club in clubsReading" :key="club.id" class="col-4">
                <BookClubCard :clubProp="club" />
              </div>
            </div>
          </div>
          <div v-else-if="selectedTab == 'planned'" class="bg-dark">
            <div v-if="!clubsPlanned.length">
              <div class="p-2">There are no clubs planning to read this book.</div>
            </div>
            <div v-else class="row py-2">
              <div v-for="club in clubsPlanned" :key="club.id" class="col-4">
                <BookClubCard :clubProp="club" />
              </div>
            </div>
          </div>
          <div v-else-if="selectedTab == 'finished'" class="bg-dark">
            <div v-if="!clubsFinished.length">
              <div class="p-2">There are no clubs finished reading this book.</div>
            </div>
            <div v-else class="row py-2">
              <div v-for="club in clubsFinished" :key="club.id" class="col-4">
                <BookClubCard :clubProp="club" />
              </div>
            </div>
          </div>
          <div v-else-if="selectedTab == 'reviews'" class="bg-dark">
            <div v-if="user.id && userHasThisBook && !userReviewedStatus">
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
            </div>
            <div v-if="!userReviews.length">
              <div class="p-2">There are no reviews for this book.</div>
            </div>
            <div v-else class="pt-2">
              <div v-for="(review, index) in userReviews" :key="index" class="col-12 pb-2">
                <div class="mx-3 rounded dark-blue-bg">
                  <div class="p-3 text-light">
                      <div class="row mb-3">
                        <div class="col-3 d-flex align-items-center">
                          <img class="user-img" :src="review.creator.picture" :alt="review.creator.name" :title="review.creator.name">
                          <div class="ms-2">
                            <div class="fw-bold">{{ review.creator.name }}</div>
                            <small class="text-secondary">Posted {{ review.createdAt.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) }}</small>
                          </div>
                        </div>
                        <div class="col-6 d-flex align-items-center justify-content-end">
                          <div v-if="user.id == review.creatorId">
                            <div class="">
                              <button class="btn btn-sm orange-btn" @click="deleteReview(review.id)">Delete</button>
                            </div>
                          </div>
                        </div>
                        <div class="col-3 d-flex align-items-center justify-content-end">
                          <div v-if="review.rating == 'Recommended'">
                            <div class="px-2 d-flex align-items-center justify-content-center text-light light-blue-bg rounded">
                              <i class="mdi mdi-star fs-4"></i>
                              <div class="ms-1 pt-1">{{ review.rating }}</div>
                            </div>
                          </div>
                          <div v-else-if="review.rating == 'Mixed Feelings'">
                            <div class="px-2 d-flex align-items-center justify-content-center text-light bg-secondary rounded">
                              <i class="mdi mdi-star-half-full fs-4"></i>
                              <div class="ms-1 pt-1">{{ review.rating }}</div>
                            </div>
                          </div>
                          <div v-else-if="review.rating == 'Not Recommended'">
                            <div class="px-2 d-flex align-items-center justify-content-center text-dark bg-danger rounded">
                              <i class="mdi mdi-star-outline fs-4"></i>
                              <div class="ms-1 pt-1">{{ review.rating }}</div>
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

  <!-- SECTION MODAL -->
  <ModalBasic :id="'bookLists'">
    <template v-slot:header>
      <div class="fw-bold fs-5">Book Lists</div>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </template>
    <template v-slot:body>
      <div v-for="(optionValue, optionName, i) in bookListsOptions" :key="i" class="form-check">
        <div v-if="bookListsOptions[optionName].existsInBookList">
          <input :id="optionName" v-model="bookListsOptions[optionName].selected" type="checkbox" class="form-check-input" checked>
          <label :for="optionName" class="form-check-label">{{ optionName }} Books</label>
          <!-- <div>exists: {{ bookListsOptions[optionName].existsInBookList }}</div>
          <div>selected: {{ bookListsOptions[optionName].selected }}</div> -->
        </div>
        <div v-else>
          <input :id="optionName" v-model="bookListsOptions[optionName].selected" type="checkbox" class="form-check-input">
          <label :for="optionName" class="form-check-label">{{ optionName }} Books</label>
          <!-- <div>exists: {{ bookListsOptions[optionName].existsInBookList }}</div>
          <div>selected: {{ bookListsOptions[optionName].selected }}</div> -->
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
      <button @click="updateBookLists()" type="button" class="btn btn-primary">Submit</button>
    </template>
  </ModalBasic>
</template>

<script>
import { useRoute } from 'vue-router';
import { booksService } from '../services/BooksService.js';
import { computed, onMounted, onUnmounted, ref, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { bookReviewsService } from '../services/BookReviewsService.js';
import { clubsService } from '../services/ClubsService.js';
import BookClubCard from '../components/BookClubCard.vue';
import ModalBasic from '../components/ModalBasic.vue';
import { Modal } from 'bootstrap';

export default {
  components: { BookClubCard, ModalBasic },
  setup(){
    const route = useRoute()
    const gbId = route.params.gbId
    
    const user = computed(() => AppState.user)
    const book = computed(() => AppState.bookDetailsPage.book)
    const userBook = computed(() => AppState.bookDetailsPage.userBook)
    // const userClubs = computed(() => AppState.bookDetailsPage.userClubs)
    const userCreatorAdminClubs = computed(() => AppState.bookDetailsPage.userCreatorAdminClubs)
    const userReviews = computed(() => AppState.bookDetailsPage.userReviews)
    const clubsPlanned = computed(() => AppState.bookDetailsPage.clubs.planned)
    const clubsReading = computed(() => AppState.bookDetailsPage.clubs.reading)
    const clubsFinished = computed(() => AppState.bookDetailsPage.clubs.finished)
    const userHasThisBook = ref(false)
    const bookScore = computed(() => Number(AppState.bookDetailsPage.bookScore).toFixed(2))
    const bookScoreUserCount = computed(() => AppState.bookDetailsPage.bookScoreUserCount)
    const userBookRating = computed(() => AppState.bookDetailsPage.userBook ? AppState.bookDetailsPage.userBook.rating : 0)
    const userBookStatus = computed(() => AppState.bookDetailsPage.userBook ? AppState.bookDetailsPage.userBook.status : 'planned')
    const userBookData = ref({
      rating: 0,
      status: 'planned'
    })
    const selectedTab = ref('reading')
    const reviewData = ref({
      gbId: gbId,
      rating: null,
      content: null
    })
    const userReviewedStatus = ref(true)
    const bookListsOptions = ref({})
    
    async function setBook() {
      try {
        await booksService.setBookDetailsPageBook(gbId)
      } catch (error) {
        Pop.error(error.message)
      }
    }

    async function setBookScore() {
      try {
        await booksService.setBookScore(gbId)
      } catch (error) {
        Pop.error(error.message)
      }
    }

    async function setAllClubs() {
      await setClubs('planned')
      await setClubs('reading')
      await setClubs('finished')
    }

    async function setClubs(status) {
      try {
        await clubsService.setBookDetailsPageClubs(gbId, status)
      } catch (error) {
        Pop.error(error.message)
      }
    }

    async function setReviews() {
      try {
        await bookReviewsService.setBookDetailsPageReviews(gbId)
      } catch (error) {
        Pop.error(error.message)
      }
    }
    
    async function setUserBooks() {
      try {
        await booksService.setBookDetailsPageUserBooks()
        userHasThisBook.value = await bookExistsInUserBookList()
        await setUserBook()
      } catch (error) {
        Pop.error(error.message)
      }
    }

    async function setUserBook() {
      try {
        booksService.setBookDetailsPageUserBook(gbId)
        userBookData.value.rating = userBook.value ? userBook.value.rating : 'null'
        userBookData.value.status = userBook.value ? userBook.value.status : 'null'
      } catch (error) {
        Pop.error(error.message)
      }
    }

    async function updateUserBookRating() {
      try {
        await booksService.updateUserBook(userBook.value.id, {rating: userBookData.value.rating})
        setBookScore()
        Pop.toast('Rating updated successfully', 'success')
      } catch (error) {
        Pop.error(error.message)
      }
    }
    
    async function updateUserBookStatus() {
      try {
        await booksService.updateUserBook(userBook.value.id, {status: userBookData.value.status})
        Pop.toast('Progress updated successfully', 'success')
      } catch (error) {
        Pop.error(error.message)
      }
    }

    async function setUserClubs() {
      try {
        await clubsService.setBookDetailsPageUserClubs(user.value.id)
      } catch (error) {
        Pop.error(error.message)
      }
    }
    
    function setUserReviewedStatus() {
      try {
        const userReview = userReviews.value.filter(review => review.gbId == gbId && review.creatorId == user.value.id)
        userReviewedStatus.value = userReview.length ? true : false        
      } catch (error) {
        Pop.error(error.message)
      }
    }
    
    async function updateBookLists() {
      for (const [name, option] of Object.entries(bookListsOptions.value)) {
          try {
            switch (option.bookListType) {
              case 'user': 
                if (option.selected && !option.existsInBookList) {  
                  await booksService.createUserBook(book.value)
                  Pop.toast(`Added to ${name} Books successfully`, 'success')
                }
                else if (!option.selected && option.existsInBookList) {
                  const confirmed = await Pop.confirm(`Are you sure you want to remove this book from ${name} Books?`)
                  if (confirmed) {
                    await booksService.deleteUserBook(option.bookId)
                    Pop.toast(`Removed from ${name} Books successfully`, 'success')
                  } else {
                    option.selected = true
                  }
                }
                await setUserBooks()
                break;
              case 'club':
                if (option.selected && !option.existsInBookList) {
                  const bookData = {
                    clubId: option.clubId,
                    gbId: book.value.gbId,
                    title: book.value.title,
                    imgUrl: book.value.imgUrl,
                    author: book.value.author,
                    rating: 0,
                    status: 'planned'
                  }
                  await booksService.createClubBook(bookData)
                  Pop.toast(`Added to ${name} Books successfully`, 'success')
                }
                else if (!option.selected && option.existsInBookList) {
                  const confirmed = await Pop.confirm(`Are you sure you want to remove this book from ${name} Books?`)
                  if (confirmed) {
                    await booksService.deleteClubBook(option.bookId)
                    Pop.toast(`Removed from ${name} Books successfully`, 'success')
                  } else {
                    option.selected = true
                  }
                }
                break;
            }
          } catch (error) {
            Pop.error(error.message)            
          }
      }
      Modal.getOrCreateInstance('#bookLists').hide()
    }

    async function openBookListsModal() {
      bookListsOptions.value['My'] = {
        bookListType: 'user',
        bookId: userBook.value ? userBook.value.id : '',
        existsInBookList: userBook.value ? true : false,
        selected: userBook.value ? true : false
      }
      userCreatorAdminClubs.value.forEach(async(club) => {
        const book = await getBookInClubBookList(club)
        bookListsOptions.value[club.name] = {
          bookListType: 'club',
          bookId: book ? book.id : '',
          clubId: club.id,
          existsInBookList: book ? true : false,
          selected: book ? true : false
        }
      })

      // userClubs.value.forEach(async(club) => {
      //   const exists = await bookExistsInClubBookList(club)
      //   console.log(`${gbId} exists in ${club.name}: `, exists)
      //   bookListsOptions.value[club.name] = {
      //     bookListType: 'club',
      //     clubId: club.id,
      //     existsInBookList: exists,
      //     selected: false
      //   }
      // })
      Modal.getOrCreateInstance('#bookLists').show()
    }
    
    async function bookExistsInUserBookList() {
      const userBooks = await booksService.getMyBooks()
      if (!userBooks) {
        return false
      }
      const bookFound = userBooks.find(book => book.gbId == gbId)
      return bookFound ? true : false
    }
    
    async function bookExistsInClubBookList(club) {
      const clubBooks = await booksService.getBooksByClubId(club.id)
      if (!clubBooks) {
        return false
      }
      const bookFound = clubBooks.find(book => book.gbId == gbId)
      return bookFound ? true : false
    }

    async function getBookInClubBookList(club) {
      const clubBooks = await booksService.getBooksByClubId(club.id)
      if (!clubBooks) {
        return null
      }
      const book = clubBooks.find(book => book.gbId == gbId)
      return book ? book : null
    }

    async function createReview() {
      try {
        await bookReviewsService.createBookReview(reviewData.value)
        reviewData.value = {
          gbId: gbId,
          rating: null,
          content: null
        }
        setUserReviewedStatus()
      } catch (error) {
        Pop.error(error.message)
      }
    }
    
    async function deleteReview(reviewId) {
      try {
        const confirmed = await Pop.confirm('Are you sure you want to delete this review?')
        if (!confirmed) {
          return
        }
        await bookReviewsService.deleteBookReview(reviewId)
        setUserReviewedStatus()
      } catch (error) {
        Pop.error(error.message)
      }
    }

    function clearBooks() {
        try {
            booksService.clearBooks()
        } catch (error) {
            Pop.error(error.message)
        }
    }

    watchEffect(async() => {
      user
      if(user.value.id) {
        await setUserBooks()
        await setUserBook()
        await setUserClubs()
        setUserReviewedStatus()
      }
    })
        
    onMounted(async() => {
      await setBook()
      await setBookScore()
      await setAllClubs()
      await setReviews()
    })

    onUnmounted(() => {
        clearBooks()
    })
    
    
    return {
      book,
      user,
      userBook,
      userBookRating,
      userBookStatus,
      userHasThisBook,
      bookScore,
      bookScoreUserCount,
      userBookData,
      userReviews,
      userReviewedStatus,
      clubsPlanned,
      clubsReading,
      clubsFinished,
      selectedTab,
      reviewData,
      bookListsOptions,
      updateUserBookRating,
      updateUserBookStatus,
      openBookListsModal,
      updateBookLists,
      createReview,
      deleteReview
    }
  }
}
</script>


<style lang="scss" scoped>
.user-img {
  height: 8vh;
  width: 8vh;
  // border-style: solid;
  // border-width: 2px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

</style>