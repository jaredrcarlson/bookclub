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
          <button @click="goToBookclubs" class="fs-3 btn orange-btn m-2">
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

    <section class="row">
      <NYTCard />
    </section>


    <BookClubSearch />
  </div>
</template>

<script>
import Pop from '../utils/Pop.js'
import { onMounted } from 'vue'
import NYTCard from '../components/NYTCard.vue'
import { newYorkTimesService } from '../services/NewYorkTimesService.js'
import BookClubSearch from '../components/BookClubSearch.vue'

export default {
    setup() {

        async function getTopBooks(){
          try {
            await newYorkTimesService.getTopBooks()

            newYorkTimesService.sortList('Paperback Trade Fiction')
          } catch (error) {
            Pop.error(error.message)
          }
        }

        onMounted(() => {
            getTopBooks();
        });
        
        return {
            goToBookclubs() {
              document.getElementById('bookclubList').scrollIntoView()
            }
        };
    },
    components: { NYTCard, BookClubSearch }
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
