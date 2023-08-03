<template>
  <div>Discussion Details Page</div>
  <div class="container-fluid">
    <section class="row mb-3">
      <div class="col-12 dark-blue-bg rounded elevation-5 text-light p-3">
        <h1>{{activeClubPost?.title}}</h1>
        <div class="d-flex">
          <div class="pe-4">
            <img class="avatar-img" :src="activeClubPost?.creator.picture" alt="">
          </div>
          <div>
            <p class="fs-4">{{ activeClubPost?.creator.name }}</p>
            <p class="fs-5 mb-4">
              <!-- **FIXME - still need ROLE  -->
              <span class="orange-text"><i class="mdi mdi-star"></i></span> Book Club Admin  Posted {{activeClubPost?.createdAt}}
            </p>
            <p class="fs-4">{{activeClubPost?.body}}</p>
          </div>
          
        </div>
      </div>
      <p class="fs-3"><i class="mdi mdi-comment"></i> 32 Comments</p>
    </section>

    <section class="row">
      <form action="">
        <label for=""><p class="fs-4">Join The Conversation</p></label>
        <textarea class="form-control border-0 elevation-3 mb-3" name="" id="" cols="130" rows="10"></textarea>
        <div class="text-end">

          <button class="btn light-blue-btn elevation-3 fs-4 px-4">Post</button>
        </div>
      </form>
    </section> 

    <section class="row py-3">
      <!-- //v-for over comments below -->
      <div v-for="comment in postComments" :key="comment.id" class="col-12 dark-blue-bg rounded elevation-5 text-light p-3 mb-3">
        <div class="d-flex justify-content-between">

          <div class="d-flex">
            <div class="pe-4">
              <img class="avatar-img" :src="comment.creator.picture" :alt="comment.creator.name">
            </div>
            
            <div>
              <p class="fs-5">HairyPotterFN</p>
              <p class=" mb-4">
                Posted {{comment.createdAt}}
              </p>
              <p class="fs-5">{{comment.body}}</p>
            </div>
          </div>
          <div title="More Options" class="text-end selectable"><i class="mdi mdi-circle"></i><i class="mdi mdi-circle"></i><i class="mdi mdi-circle"></i></div>
        </div>
      </div>

      <div class="col-12 dark-blue-bg rounded elevation-5 text-light p-3">
        <div class="d-flex">
          <div class="pe-4">
            <img class="avatar-img" src="https://images.unsplash.com/photo-1516712109157-6a67f5d73fa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VpcmQlMjBkdWRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="">
          </div>
          <div>
            <p class="fs-5">HairyPotterFN</p>
            <p class=" mb-4">
              Posted July 31, 2079
            </p>
            <p class="fs-5">Yepper do does</p>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>


<script>
import { useRoute } from "vue-router";
import Pop from "../utils/Pop.js";
import { clubPostsService } from "../services/ClubPostsService.js";
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";

export default {
  setup(){
    const route = useRoute()

    async function getPostById(){
      try {
        const postId = route.params.postId
        // logger.log(postId)
        await clubPostsService.getPostById(postId)
      } catch (error) {
        Pop.error(error.message)
      }
    }
    async function getPostComments(){
      try {
        const postId = route.params.postId
        await clubPostsService.getPostComments(postId)
      } catch (error) {
        Pop.error(error.message)
      }
    }
    onMounted(() => {
      getPostById(route.params.postId)
      getPostComments(route.params.postId)
    })
    return {
      route,
      activeClubPost: computed(() => AppState.activeClubPost),
      postComments: computed(() => AppState.postComments)
    }
  }
}
</script>


<style lang="scss" scoped>
.avatar-img{
  border-radius: 50%;
  width: 10vh;
  height: 10vh;
  object-fit: cover;
  object-position: center;
  box-shadow: 2px 2px 6px whitesmoke;
}
</style>