<template>
  <router-link :to="{name: 'Book Details', params:{gbId: bookProp.gbId}}">
      <td>
        <p class="d-flex flex-column">
          <span>
            {{ bookProp.title }}
          </span>
          <span class="fw-normal">
            {{ bookProp.author }}
          </span>
        </p>
      </td>
      <td>
        <p class="d-flex flex-column">
          <span>
            {{ bookProp.status }}
          </span>
          <span class="fw-light" v-if="bookProp.status == 'finished'">
            Completed on:
          </span>
        </p>
      </td>
      <td>?/10</td>
  </router-link>
</template>


<script>
import { Book } from '../models/Book.js';

export default {
  props:{
    bookProp: {type: Book, required: true}
  },

  setup(){
    return {

    }
  }
}
</script>


<style lang="scss" scoped>

</style>