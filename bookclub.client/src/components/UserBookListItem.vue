<template>
    <td>
      <router-link :to="{name: 'Book Details', params:{gbId: bookProp.gbId}}">
        <span class="large-text-style text-dark">
          {{ bookProp.title }}
        </span> <br>
        <span class="author-text-style text-dark">
          by {{ bookProp.author }}
        </span>
      </router-link>
    </td>
    <td v-if="bookProp.status == 'finished'">
      <span class="large-text-style">
        Finished
      </span> <br>
      <span class="sub-text-style">
        completed {{ new Date(bookProp.updatedAt).toLocaleDateString() }}
      </span>
    </td>
    <td v-else-if="bookProp.status == 'planned'">
      <span class="status-text-style">
        Planning to Read
      </span> <br>
      <span class="sub-text-style">
        added {{ new Date(bookProp.createdAt).toLocaleDateString() }}
      </span>
    </td>
    <td v-else>
      <span class="status-text-style">
        Currently Reading
      </span> <br>
      <span class="sub-text-style">
        added {{ new Date(bookProp.createdAt).toLocaleDateString() }}
      </span>
    </td>
    <td>
      <span class="large-text-style">
        ?/10
      </span>
    </td>
    <td>
      <div class="dropdown">
        <button class="btn dropdown-toggle fs-4 orange-text" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="mdi mdi-dots-vertical"></i>
        </button>
        <ul class="dropdown-menu">
          <li class="px-3 fw-semibold">Change Progress</li>
          <li class="px-3 selectable" @click="changeUserBookProgress('reading')">Reading</li>
          <li class="px-3 selectable" @click="changeUserBookProgress('planned')">Planning to Read</li>
          <li class="px-3 selectable" @click="changeUserBookProgress('finished')">Finished</li>
        </ul>
      </div>
    </td>
</template>


<script>
import { Book } from '../models/Book.js';
import { booksService } from '../services/BooksService.js';
import Pop from '../utils/Pop.js';

export default {
  props:{
    bookProp: {type: Book, required: true}
  },
  setup(props){
    return {
      async changeBookProgress(progress){
        try {
          const bookData = {status: progress}

          const userBookId = props.bookProp.id

          await booksService.changeBookProgress(bookData, userBookId)
        } catch (error) {
          Pop.error(error.message)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

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