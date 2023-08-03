<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12">
        <h1 class="m-3">
          Club Discussions <span class="ps-5"><button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn orange-btn">Make Post</button></span>
        </h1>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Make a Post...</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        <PostForm/>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
        <!-- End Modal -->
      </div>
    </section>
<!-- //comments section -->
    <section v-for="clubPost in clubPosts" :key="clubPost?.id" class="row bg-white elevation-5 rounded">
      
    
    <section title="Go to this Post and its Comments" class="row align-items-center p-2 text-dark selectable ">
            <div class="col-md-2 col-12">
              <img class="img-fluid avatar-img" :src="clubPost.creator.picture" :title="clubPost.creator.name" :alt="clubPost.creator.name">
            </div>
            <div class="col-md-8 col-12">
              <p class="fw-bold fs-3">
                {{clubPost.title}}
              </p>
              <!-- <p class="fw-bold fs-5">
                {{clubPost.body}}
              </p> -->
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
              <p v-if="clubPost.creatorId == account.id" data-bs-toggle="modal" data-bs-target="#exampleModal"  class="fs-5 text-warning selectable">
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