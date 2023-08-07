<template>
    <td>
      <span class="large-text-style">
        {{ bookProp.title }}
      </span> <br>
      <span class="author-text-style">
        by {{ bookProp.author }}
      </span>
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
</template>


<script>
import { Book } from '../models/Book.js';

export default {
  props:{
    bookProp: {type: Book, required: true}
  },
  setup(){
    return {}
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