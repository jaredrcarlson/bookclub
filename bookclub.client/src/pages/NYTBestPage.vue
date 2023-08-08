<template>
  <div class="container-fluid ghost-bg">
    <section class="row">
      <div class="col-12">
        <h1>
          New York Times Best Sellers
        </h1>
      </div>
    </section>
    <section class="row">
      <div class="col-12">
        <h2>
          Paperback Trade Fiction
        </h2>
      </div>
      <div class="col-12">
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