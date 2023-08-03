<template>
    <div class="d-flex align-items-center text-light p-2 row">
      <!-- FIXME Make the profile image into a router link -->
      <div class="pe-3 col-4">
        <img class="img-fluid avatar-img" :src=memberProp.profile.picture :alt=memberProp.profile.name>
      </div>
      <div class="col-6">
        <p class="m-0">
          {{ memberProp.profile.name }}
        </p>
      </div>
      <div class="col-2 text-end">
        <p class="m-0 fs-3">
          <i class="mdi mdi-dots-vertical" type="button"></i>
        </p>
      </div>
    </div>
</template>


<script>
import { Member } from '../models/Member.js';

export default {
  props:{
    memberProp: {type: Member, required:true}
  },

  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>
.avatar-img{
  height: 7vh;
  width: 7vh;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
</style>