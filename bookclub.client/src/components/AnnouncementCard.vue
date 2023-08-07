<template>
  <router-link :to="{name: 'Announcement Details Page', params:{postId: announcementProp.id}}">
          <section class="row align-items-center p-2 text-dark">
            <div class="col-md-2 col-12">
              <img class="img-fluid avatar-img" :src="announcementProp.creator?.picture" :alt="announcementProp.creator?.name">
            </div>
            <div class="col-md-8 col-12">
              <p class="fw-bold fs-3">
                {{ announcementProp.title }}
              </p>
              <p class="fw-bold fs-4">
                {{ announcementProp.body }}
              </p>
              <p>
                <span class="pe-4"><i v-if="announcementProp.membership.role == 'creator'" class="mdi mdi-star orange-text"></i>{{ announcementProp?.membership?.role.toUpperCase() }}   {{announcementProp.creator?.name}}</span><span>posted {{announcementProp.createdAt}}</span>
              </p>
            </div>
            <div class="col-md-2 col-12">
              <div v-if="announcementProp?.creatorId == account?.id" class="btn-group align-items-start mb-3">
                <button title="More Options" class="btn orange-text text-end btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="mdi mdi-circle"></i><i class="mdi mdi-circle"></i><i class="mdi mdi-circle"></i>
        </button>
        <ul  class="p-1 dropdown-menu">
        <li @click="deletePost(announcementProp?.id)" class="selectable mb-1 p-1">
        Delete Announcement <i class="mdi mdi-delete"></i>
        </li>
        <li class="selectable mb-1 p-1">
        Edit Announcement <i class="mdi mdi-pencil"></i>
      </li>

    </ul>
  </div>
              <p class="fs-5">
                <i class="mdi mdi-message-reply"></i> <span>{{announcementProp.commentCount}}10</span>
              </p>
            </div>
            
          </section>
        </router-link>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { clubPostsService } from "../services/ClubPostsService.js";

export default {
  props: {
    announcementProp: { type: Object, required: true }
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
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
</style>