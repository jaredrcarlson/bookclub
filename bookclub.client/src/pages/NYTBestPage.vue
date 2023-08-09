<template>
  <div class="container-fluid ghost-bg">
    <section class="row">
      <div class="col-12 my-3 text-center">
          <h1>
            The New York Times Best Sellers
          </h1>
          <p>
            Find your new favorite book from The New York Times!
          </p>
      </div>
    </section>
    <section class="row">
      <div class="col-12 mt-3">
        <h2>
          Paperback Trade Fiction
        </h2>
      </div>
      <div class="col-12 my-3">
        <div class="elevation-3 dark-blue-bg">
          
        </div>
      </div>
    </section>
    <section class="row">
      <div class="col-12">
        <h2>
          Young Adult Hardcover
        </h2>
      </div>
      <div class="col-12 my-3">
        <div class="elevation-3 dark-blue-bg">
          
        </div>
      </div>
    </section>
    <section class="row">
      <div class="col-12">
        <h2>
          Graphic Books and Manga
        </h2>
      </div>
      <div class="col-12 my-3">
        <div class="elevation-3 dark-blue-bg">
          
        </div>
      </div>
    </section>
    <section class="row">
      <div class="col-12">
        <h2>
          Paperback Nonfiction
        </h2>
      </div>
      <div class="col-12 my-3">
        <div class="elevation-3 dark-blue-bg">
          
        </div>
      </div>
    </section>
    <section class="row">
      <div class="col-12">
        <h2>
          Advice, How-To & Miscellaneous
        </h2>
      </div>
      <div class="col-12 my-3">
        <div class="elevation-3 dark-blue-bg">
          
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import { computed, onMounted } from 'vue'
import { newYorkTimesService } from '../services/NewYorkTimesService.js'
import Pop from '../utils/Pop.js'
import { AppState } from '../AppState.js'

export default {
  setup(){
    async function getTopBooks(){
      try {
        await newYorkTimesService.getTopBooks()
      } catch (error) {
        Pop.error(error.message)
      }
    }

    onMounted(()=> {
      getTopBooks()
    })

    return {
      nytLists: computed(() => AppState.nytLists),
    }
  }
}
</script>


<style lang="scss" scoped>

</style>