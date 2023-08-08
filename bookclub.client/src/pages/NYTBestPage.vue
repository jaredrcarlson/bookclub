<template>
  <h1>Books Page</h1>
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
      nytLists: computed(() => AppState.nytLists)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>