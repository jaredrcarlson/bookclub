<template>
  <section class="row my-3">
      <div class="col-12 dark-blue-bg rounded elevation-5 text-light p-3">
        <h1>{{postProp?.title}}</h1>
        <div class="d-flex">
          <!-- \**FIXME - this link is breaking :( -->
          <div class="pe-4">
            <!-- <router-link :to="{name: 'Profile Page', params: {profileId: postProp?.creatorId}}"> -->
            <img class="avatar-img" :src="postProp?.creator?.picture" :alt="postProp?.creator?.name">
          <!-- </router-link> -->
          </div>
          <div>
            <p class="fs-4">{{ postProp?.creator?.name }}</p>
            <p class="fs-5 mb-4">
              <span class="orange-text"><i v-if="postProp?.membership.role == 'creator'" class="mdi mdi-star orange-text"></i><i v-else-if="postProp?.membership.role == 'admin'" class="mdi mdi-star-outline orange-text"></i><i v-else class="mdi mdi-account orange-text"></i></span> {{postProp?.membership?.role?.toUpperCase()}}  Posted {{postProp?.createdAt}}
            </p>
            <p class="fs-4">{{postProp?.body}}</p>
          </div>
          
        </div>
      </div>
    </section>
</template>


<script>
export default {
  props: {
    postProp: { type: [Object, null], required: true }
  },
  setup(){
    return {}
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