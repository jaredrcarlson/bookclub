<template>
  <section title="Go to this Post and its Comments" class="row align-items-center p-2 text-dark selectable ">
        <div class="col-md-2 col-12">
          <img class="img-fluid avatar-img" :src="postProp?.creator?.picture" :title="postProp.creator?.name" :alt="postProp?.creator?.name">
        </div>
        <div class=" col-md-8 col-12">
              
              <router-link :to="{name: 'Discussion Details Page', params:{postId: postProp.id}}">
              <p class="selectable fw-bold fs-3 text-dark">
                {{postProp?.title}}
              </p>
            </router-link>
              <p>
                
                <span class="pe-4"><i class="mdi mdi-star orange-text"></i> {{ postProp?.membership?.role.toUpperCase() }} {{postProp?.creator?.name}}</span><span>posted {{postProp?.createdAt}}</span>
              </p>
            </div>
            <div class="col-md-2 col-12  justify-content-evenly">
              <div v-if="postProp?.creatorId == account?.id" class="btn-group align-items-start mb-3">
                <button title="More Options" class="btn orange-text text-end btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="mdi mdi-circle"></i><i class="mdi mdi-circle"></i><i class="mdi mdi-circle"></i>
        </button>
        <ul  class="p-1 dropdown-menu">
        <li @click="deletePost(postProp?.id)" class="selectable mb-1 p-1">
        Delete Comment <i class="mdi mdi-delete"></i>
        </li>
        <li class="selectable mb-1 p-1">
        Edit Comment <i class="mdi mdi-pencil"></i>
      </li>

    </ul>
  </div>
  <p class="fs-5 ">
    <i title="See Comments on this Post" class="mdi mdi-message-reply"></i> <span>{{ postProp.commentCount }}</span>
  </p>
            </div>
          </section>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import { clubPostsService } from "../services/ClubPostsService.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    postProp: { type: Object, required: true}
  },
  setup(){
    return {
      account: computed(() => AppState.account),
      async deletePost(postId) {
                try {
                    const wantsToDelete = await Pop.confirm("Once it's gone, it's gone. Are you sure you want to delete?");
                    if (!wantsToDelete) {
                        return;
                    }
                    logger.log('[DELETING POST...]');
                    await clubPostsService.deletePost(postId);
                }
                catch (error) {
                    Pop.error(error.message);
                }
            },

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