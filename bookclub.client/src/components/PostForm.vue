<template>
  <form class="form-control" action="" @submit.prevent="handleSubmit()">
          <div class="mb-2 ">
            <label for="title" class="form-label">Title</label>
            <input v-model="editable.title" class="form-control"  type="text" minlength="3" maxlength="100" id="title" placeholder="Post Title..." required >
          </div>
          <div class="mb-2 ">
            <label for="body" class="form-label">Post Content</label>
            <input v-model="editable.body" class="form-control"  type="text" minlength="3" maxlength="200" id="body" placeholder="Post Content..." required >
          </div>
          <div class="my-2">
            <button type="submit" class="btn orange-btn">Submit</button>
          </div>
        </form>
</template>


<script>
import { ref } from "vue";
import Pop from "../utils/Pop.js";
import { clubPostsService } from "../services/ClubPostsService.js";
import { Modal } from "bootstrap";
import { router } from "../router.js";
import { logger } from "../utils/Logger.js";
import { useRoute } from "vue-router";

export default {
  setup(){
    const editable = ref({})
    const route = useRoute()
    return {
      editable,
      handleSubmit(){
        if(editable.value.id) {
          this.editPost()
        }
        else {
          this.createPost()
        }
      },
      async createPost(){
        try {
          const postData = editable.value
          postData.clubId = route.params.clubId
          // logger.log('I clicked submit')
          const clubPost = await clubPostsService.createPost(postData)
          editable.value = {}
          Modal.getOrCreateInstance('#exampleModal').hide()
          // router.push({EVENTUALLY THIS WILL BRING UP POST W/DETAILS})
        } catch (error) {
          Pop.error(error.message)
        }
      },
      async editPost(){
        try {
          const postData = editable.value
          postData.clubId = route.params.clubId
          const editedPost = await clubPostsService.editPost(postData)
          // editable.value = {}
          Modal.getOrCreateInstance('#exampleModal').hide()
        } catch (error) {
          Pop.error(error.message)
        }
      },
    }
  }
}
</script>


<style lang="scss" scoped>

</style>