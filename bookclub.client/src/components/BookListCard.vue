<template>
  <div style="overflow-x: auto;">
    <table id="books">
      <tr>
        <th class="ps-2">
          Title
        </th>
        <th class="ps-2">
          Progress
        </th>
        <th class="ps-2">
          Rating
        </th>
      </tr>
      <tr v-for="book in books" :key="book.id">
        <td>
          <span class="large-text-style">
            {{ book.title }}
          </span> <br>
          <span class="author-text-style">
            by {{ book.author }}
          </span>
        </td>
        <td v-if="book.status == 'finished'">
          <span class="large-text-style">
            Finished
          </span>
          <span class="sub-text-style">
            completed {{ new Date(book.updatedAt).toLocaleDateString() }}
          </span>
        </td>
        <td v-else-if="book.status == 'planned'">
          <span class="status-text-style">
            Planning to Read
          </span> <br>
          <span class="sub-text-style">
            added {{ new Date(book.createdAt).toLocaleDateString() }}
          </span>
        </td>
        <td v-else>
          <span class="status-text-style">
            Currently Reading
          </span> <br>
          <span class="sub-text-style">
            added {{ new Date(book.createdAt).toLocaleDateString() }}
          </span>
        </td>
        <td>
          <span class="large-text-style">
            ?/10
          </span>
        </td>
      </tr>
    </table>
  </div>

</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

export default {

  setup(){
    return {
      books: computed(() => AppState.books),

    }
  }
}
</script>


<style lang="scss" scoped>

table{
  width: 100%;
}

#books th{
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: lighter;
}

#books th, #books td{
  border-bottom: 1px solid #8f8f8f;
  padding: 7px;
}

.sub-text-style{
  font-weight: 100;
  font-size: smaller;
}

.large-text-style{
  font-size:large;
  font-weight: 600;
}

.status-text-style{
  font-size: large;
}

.author-text-style{
  font-size: smaller;
  font-weight: 500;
}
</style>