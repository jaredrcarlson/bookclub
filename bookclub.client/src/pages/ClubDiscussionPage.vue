<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12">
        <h1 class="m-3">
          Club Discussions
        </h1>
      </div>
    </section>
<!-- //comments section -->
    <section v-for="clubPost in clubPosts" :key="clubPost?.id" class="row bg-white elevation-5 rounded">
      
    
    <section class="row align-items-center p-2 text-dark  ">
            <div class="col-md-2 col-12">
              <img class="img-fluid avatar-img" :src="clubPost.creator.picture" :title="clubPost.creator.name" :alt="clubPost.creator.name">
            </div>
            <div class="col-md-8 col-12">
              <p class="fw-bold fs-3">
                {{clubPost.title}}
              </p>
              <p class="fw-bold fs-5">
                {{clubPost.body}}
              </p>
              <p>
                <span class="pe-4">{{clubPost.creator.name}}</span><span>posted {{clubPost.createdAt}}</span>
              </p>
            </div>
            <div class="col-md-2 col-12 d-flex justify-content-evenly">
              <p class="fs-5 selectable">
                <i title="See Comments on this Post" class="mdi mdi-message-reply"></i> <span>10</span>
              </p>
              <p v-if="clubPost.creatorId == account.id" @click="deletePost(clubPost.id)" class="fs-5 text-danger selectable">
                <i title="Delete My Post" class="mdi mdi-delete"></i>
              </p>
              <p v-if="clubPost.creatorId == account.id" @click="editPost(clubPost.id)" class="fs-5 text-warning selectable">
                <i title="Edit My Post" class="p-2 mdi mdi-pencil"></i>
              </p>
            </div>
          </section>

        </section>
  </div>
</template>


<script>
import { computed, ref, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import { useRoute } from "vue-router";
import Pop from "../utils/Pop.js";
import { clubPostsService } from "../services/ClubPostsService.js"
import { logger } from "../utils/Logger.js";

export default {
  setup(){
    const editable = ref({})
    const route = useRoute()

    async function getClubPosts(){
      try {
        const clubId = route.params.clubId
        await clubPostsService.getClubPosts(clubId)
      } catch (error) {
        Pop.error(error.message)
      }
    }
    watchEffect(() => {
      getClubPosts()
    })
    return {
      selectedClub: computed(() => AppState.selectedClub),
      clubPosts: computed(() => AppState.clubPosts),
      account: computed(() => AppState.account),

      async deletePost(postId){
        try {
          const wantsToDelete = await Pop.confirm("Once it's gone, it's gone. Are you sure you want to delete?")
          if(!wantsToDelete) {
            return
          }
          logger.log('[DELETING COMMENT...]')
          await clubPostsService.deletePost(postId)
        } catch (error) {
          Pop.error(error.message)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.avatar-img{
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  height: 10vh;
  width: 10vh;
  box-shadow: 3px 3px 2px black;
}
</style>