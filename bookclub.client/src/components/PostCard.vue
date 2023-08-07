<template>
  <section  class="row align-items-center p-2 text-dark  ">
        <div class="col-md-2 col-12">
          <router-link :to="{name: 'Profile Page', params: {profileId: postProp.creator.id}}">
          <img class="selectable img-fluid avatar-img" :src="postProp?.creator?.picture" :title="postProp.creator?.name" :alt="postProp?.creator?.name">
        </router-link>
        </div>
        <div class=" col-md-8 col-12 ">
              
              <router-link :to="{name: 'Discussion Details Page', params:{postId: postProp.id}}">
              <p title="Go to this Post and its Comments" class="selectable fw-bold fs-3 text-dark">
                {{postProp?.title}}
              </p>
            </router-link>
              <p>
                
                <span class="pe-4"><i v-if="postProp.membership.role == 'creator'" class="mdi mdi-star orange-text"></i><i v-else-if="postProp?.membership?.role == 'admin'" class="mdi mdi-star-outline orange-text"></i><i v-else class="mdi mdi-account orange-text"></i> {{ postProp?.membership?.role.toUpperCase() }} {{postProp?.creator?.name}}</span><span>posted {{postProp?.createdAt}}</span>
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
        <li data-bs-toggle="modal" data-bs-target="#exampleModal" class="selectable mb-1 p-1">
        Edit Post <i class="mdi mdi-pencil"></i>
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
import { Member } from "../models/Member.js";

export default {
  props: {
    postProp: { type: Object, required: true},
    memberProp: { type: Member, required: true }
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