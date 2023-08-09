<template>
  <div class="col-12 my-3" v-for="l in myList" :key="l.id">
    <section class="row mx-2">
      <h2>{{ l.name }}</h2>
    </section>
    <section class="dark-blue-bg elevation-3 mx-2 row justify-content-between p-3">
      <div class="col-md-2 col-12 ghost-bg p-1 pb-3 pb-md-0" v-for="b in l.books" :key="b.rank">
          <div class="d-flex align-items-start justify-content-center">
            <img @click="searchGbApi(b.primary_isbn10)" class="img-fluid img-style selectable" :src=b.book_image :alt=b.title>
          </div>
        <div class="pt-2 ps-md-2 ps-3 description-style d-flex flex-column">
          <div>
            <span class="fw-semibold">
              #{{ b.rank }} {{ b.title }}
            </span> <br>
            <span>
              by {{ b.author }}
            </span>
          </div>
          <div class="mt-2">
            <p>
              {{ b.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { router } from '../router.js';
import { googleBooksService } from '../services/GoogleBooksService.js';

export default {
  setup(){
    return {
      nytLists: computed(() => AppState.nytLists),
      myList: computed(() => AppState.nytLists.filter((list) => list.name == "Paperback Trade Fiction" || list.name == "Advice, How-To & Miscellaneous" || list.name == 'Graphic Books and Manga' || list.name == 'Paperback Nonfiction' || list.name == 'Young Adult Paperback')),
      async searchGbApi(isbnCode){
        const gbId = await googleBooksService.searchByCode(isbnCode)

        router.push({name:'Book Details', params:{gbId: gbId}})
      }
    }
  }
}
</script>


<style lang="scss" scoped>

.description-style{
  overflow-y: auto;
  height: 30vh;
}
.img-style{
  height: 60vh;
  object-fit: cover;
  object-position: center;
}

@media(min-width: 768px){
  .img-style{
  height: 20vh;
  object-fit: cover;
  object-position: center;
  }

  .description-style{
  overflow-y: auto;
  height: 20vh;
  }
}
</style>
