<template>
  <div class="container-fluid">
    <section class="row dark-blue-bg text-light">
      <div class="col-12 text-center mt-5 mb-3 pb-5">
        <div class="mb-4">
          <h1 class="fw-bold">
            Find a <span class="orange-text">book club</span> right for you
          </h1>
          <h3>
            Discuss, rate, and enjoy the books you love with a community you create.
          </h3>
        </div>

        <div>
          <button class="fs-3 btn orange-btn m-2">
            Find a Book Club
          </button>
          <router-link :to="{name: 'Create Book Club'}">
            <button class="fs-3 btn light-blue-btn m-2">
              Make a Book Club
            </button>
          </router-link>
        </div>

      </div>
    </section>

    <section class="row">

      <div class="col-12 d-flex p-0">
        <img class="img-fluid home-banner flex-fill" src="https://images.unsplash.com/photo-1618414952052-289dab88b409?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="book shelf">
      </div>

    </section>

    <!-- <section class="row ghost-bg">
      <div class="col-12 mt-5">
        <h6>
          NY Times Best Sellers
        </h6>
      </div>
    </section> -->

    <section class="row ghost-bg">
      <div class="col-12 mt-5">
        <section class="row">
          <div class="col-md-6 col-12">
            <p class="fs-3 fw-bold ms-3">
              Bookclub List
            </p>
          </div>

          <div class="col-md-6 col-12 d-flex justify-content-end">
            <div class="mx-3">
              <router-link :to="{name: 'Create Book Club'}">
                <button class="btn orange-btn">
                  Create a Club
                </button>
              </router-link>
            </div>

            <div>
              <form @submit.prevent="getClubsByQuery">
                <div class="d-flex me-3">
                  <label for="search"></label>
                  <input v-model="searchQuery" type="text" name="search" id="search" placeholder="Search clubs..." class="form-control">
                  <button class="btn orange-btn" title="Submit" type="submit">
                    <i class="mdi mdi-magnify"></i>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </section>
      </div>
    </section>

    

    <section class="row ghost-bg">
      <div class="col-md-6 col-12 my-3" v-for="club in clubs" :key="club.id">
        <BookClubCard :clubProp="club" />
      </div>
    </section>

    <section class="row ghost-bg">
      <div class="col-md-4 col-12 mx-md-auto px-5 pb-3 justify-content-between">
        <div class="d-flex justify-content-between">
          <button @click="getPrevClubs" :disabled="!prevPage" class="btn orange-btn">Previous Page</button>
          <button @click="getNextClubs" :disabled="!nextPage" class="btn orange-btn">Next Page</button>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import Pop from '../utils/Pop.js'
import { clubsService } from '../services/ClubsService.js'
import { computed, onMounted, ref } from 'vue'
import { AppState } from '../AppState.js'
import BookClubCard from '../components/BookClubCard.vue'

export default {
    setup() {

        const searchQuery = ref("")
        async function getAllClubs() {
            try {
                await clubsService.getAllClubs();
            }
            catch (error) {
                Pop.error(error.message);
            }
        }
        onMounted(() => {
            getAllClubs();
        });
        return {
            searchQuery,
            clubs: computed(() => AppState.clubs),
            prevPage: computed(() => AppState.prevPage),
            nextPage: computed(() => AppState.nextPage),
            async getNextClubs() {
              try {
                await clubsService.getNextClubsPage()
              } catch (error) {
                Pop.error(error.message)
              }
            },
            async getPrevClubs() {
              try {
                await clubsService.getPrevClubsPage()
              } catch (error) {
                Pop.error(error.message)
              }
            },
            async getClubsByQuery() {
              try {
                await clubsService.getAllClubs(searchQuery.value)
              } catch (error) {
                Pop.error(error.message)
              }
            }
        };
    },
    components: { BookClubCard }
}
</script>

<style scoped lang="scss">

.hero-title {
  font-size: 4.5rem;
}

.home-banner{
  height: 45vh;
  object-fit: cover;
  object-position: center;
}

</style>
