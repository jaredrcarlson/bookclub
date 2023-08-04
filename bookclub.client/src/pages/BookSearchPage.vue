<template>
  <div class="container-fluid">
    <section class="row my-3">
      <div class="col-12">
        <div class="d-flex justify-content-between">
          <form class="d-flex" @submit.prevent="search()">
            <input class="border-0 rounded-start bg-light form-control shadow-none" v-model="query" type="text" placeholder="Search">
            <div @click="search()" class="selectable border-0 rounded-end d-flex align-items-center text-light orange-bg"><i class="mdi mdi-magnify fs-5 mx-3"></i></div>
          </form>
          <button class="btn btn-success">filter</button>
        </div>
      </div>
    </section>
    <section class="row">
      <div v-for="book in books" :key="book.id" class="col-2 my-1">
        <router-link :to="{name: 'Book Details', params: { gbId: book.gbId }}">
          <img class="img-fluid" :src="book.imgUrl" :title="book.title">
        </router-link>           
      </div>
    </section>
    
  </div>
</template>


<script>
import { computed, ref } from 'vue';
import { booksService } from '../services/BooksService.js';
import { AppState } from '../AppState.js';

export default {
  setup(){
    const query = ref('')
    const activeBook = ref({})

    async function search() {
      await booksService.searchBooks(query.value)
    }

    function setActiveBook(book) {
      activeBook.value = book
    }

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

</style>
