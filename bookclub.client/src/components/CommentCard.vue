<template>
        <div class="d-flex justify-content-between">

          <div class="d-flex">
            <div class="pe-4">
              <img class="avatar-img" :src="commentProp?.creator?.picture" :alt="commentProp?.creator?.name">
            </div>
            
            <div>
              <p class="fs-5">{{commentProp?.creator?.name}}, </p>
              <p class=" mb-4">
                Posted {{commentProp?.createdAt}}
              </p>
              <p class="fs-5">{{commentProp?.body}}</p>
            </div>
          </div>
          
          <div class="btn-group align-items-start">
  <button v-if="account?.id == commentProp?.creatorId" title="More Options" class="btn orange-text text-end btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <i class="mdi mdi-circle"></i><i class="mdi mdi-circle"></i><i class="mdi mdi-circle"></i>
  </button>
  <ul  class="p- dropdown-menu">
    <li @click="deleteComment(commentProp?.id)" class="selectable mb-1 p-2">
      Delete Comment <i class="mdi mdi-delete"></i>
    </li>
    <li @click="editComment(commentProp?.id)" class="selectable mb-1 p-2">
      Edit Comment <i class="mdi mdi-pencil"></i>
    </li>
  </ul>
</div>
        </div>
      
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";
import { postCommentsService } from "../services/PostCommentsService.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    commentProp: { type: Object, required: true}
  },
  setup(){
    return {
      postComments: computed(() => AppState.postComments),
      account: computed(() => AppState.account),
      async deleteComment(commentId) {
                try {
                    const wantsToDelete = await Pop.confirm('Are you sure you want to delete your comment?');
                    if (!wantsToDelete) {
                        return;
                    }
                    // logger.log('[DELETING COMMENT....]')
                    await postCommentsService.deleteComment(commentId);
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
  width: 10vh;
  height: 10vh;
  object-fit: cover;
  object-position: center;
  box-shadow: 2px 2px 6px whitesmoke;
}
</style>