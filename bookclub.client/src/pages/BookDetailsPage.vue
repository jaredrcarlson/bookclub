<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div v-if="book" class="row">
          <div class="col-5">
            <img class="img-fluid" :src="book.imgUrlLarge" alt="">
          </div>
          <div class="col-7 h-100">
            <div class="d-flex flex-column h-100">
              <h2>{{book.title}} {{ book.subtitle }}</h2>
              <h3>By <span v-for="author in book.authors" :key="author">{{ author }}</span></h3>
              <p class="">{{ book.description }}</p>
              <p class="mb-0">{{ book.pageCount }} Pages</p>
              <p class="mb-0">Published {{book.publishedDate.toLocaleDateString()}}</p>
              <p class="mb-0">Clubs that have read this book: 10</p>
              <p class="mb-0">Clubs reading this book: 3</p>
              <!-- <button v-if="!booksToAdd.includes(book)" @click="addBookToList" class="btn orange-btn ms-auto">Add To List</button>
              <button v-else @click="removeBookFromList" class="btn orange-btn ms-auto">Remove From List</button> -->
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
import { computed, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';

export default {
  setup(){
    const route = useRoute()

    async function getBookDetails(gbId) {
      try {
        await booksService.setDetailsPageBook(gbId)
      } catch (error) {
        Pop.error(error.message)
      }
    }

    watchEffect(() => {
      getBookDetails(route.params.gbId)
    })

    return {
      book: computed(() => AppState.detailsPageBook)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>