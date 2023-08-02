<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12">
        <h1>
          Books Page
        </h1>
        <form class="d-flex" @submit.prevent="search(searchData.query)">
          <input class="border-0 rounded-start bg-light form-control shadow-none" v-model="searchData.query" type="text" placeholder="Search">
          <div @click="search(searchData.query)" class="btn-custom border-0 rounded-end d-flex align-items-center bg-light"><i class="mdi mdi-magnify fs-5 mx-3"></i></div>
        </form>
      </div>
    </section>
    <section class="row">
      <div v-for="book in searchData.results" :key="book.id" class="col-12">
        <div class="border border-1 border-dark p-2">
          <h4>Volume ID: {{ book.id }}</h4>
          <h4>Volume Info</h4>
          <div v-for="(value, name, index) in book.volumeInfo" :key="index">
            <strong>{{ name }}: </strong>{{ value }}
          </div>
          <!-- <div>Volume Info: {{ book.volumeInfo }}</div> -->
        </div>
      </div>
    </section>
    
  </div>
</template>


<script>
import { ref } from 'vue';
import { googleBooksService } from '../services/GoogleBooksService.js';

export default {
  setup(){
    const searchData = ref({
      query: '',
      results: []
    })

    async function search(query) {
      searchData.value.results = await googleBooksService.search(query)
    }

    return {
      searchData,
      search
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
