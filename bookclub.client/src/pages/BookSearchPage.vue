<template>
  <div class="container-fluid">
    <section class="row my-3">
      <div class="col-12">
        <div class="d-flex">
          <form class="d-flex" @submit.prevent="search()">
            <input required maxlength="50" class="border-end-0 rounded-end-0 form-control shadow-none" v-model="query" type="text" placeholder="Search">
            <div @click="search()" class="selectable border-0 rounded-end d-flex align-items-center text-light orange-bg"><i class="mdi mdi-magnify fs-4 mx-3"></i></div>
          </form>
        </div>
      </div>
    </section>
    <section class="row">
      <div v-for="book in books" :key="book.id" class="col-md-1 col-6 my-1">
        <router-link :to="{name: 'Book Details', params: { gbId: book.gbId }}">
          <img class="img-fluid book-img" :src="book.imgUrl" :title="book.title">
        </router-link>           
      </div>
    </section>
    
  </div>
</template>


<script>
import { computed, onUnmounted, ref } from 'vue';
import { booksService } from '../services/BooksService.js';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';

export default {
  setup(){
    const query = ref('')
    const activeBook = ref({})

    async function search() {
      if (query.value != '') {
        await booksService.searchBooks(query.value)
      }
    }

    function setActiveBook(book) {
      activeBook.value = book
    }

    function clearBooks() {
            try {
                booksService.clearBooks()
            } catch (error) {
                logger.log(error)
                Pop.error(error.message)
            }
        }
    onUnmounted(() => {
        clearBooks()
    })

    return {
      query,
      books: computed(() => AppState.books),
      activeBook,
      search,
      setActiveBook
    }
  }
}
</script>


<style lang="scss" scoped>

.book-img {
  width: 100%;
  height: 100%;
}

</style>
