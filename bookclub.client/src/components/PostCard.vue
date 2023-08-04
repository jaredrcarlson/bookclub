<template>
  <section class="row my-3">
      <div class="col-12 dark-blue-bg rounded elevation-5 text-light p-3">
        <h1>{{postProp?.title}}</h1>
        <div class="d-flex">
          <div class="pe-4">
            <img class="avatar-img" :src="postProp?.creator?.picture" :alt="postProp?.creator?.name">
          </div>
          <div>
            <p class="fs-4">{{ postProp?.creator?.name }}</p>
            <p class="fs-5 mb-4">
              <!-- **FIXME - still need ROLE  -->
              <span class="orange-text"><i class="mdi mdi-star"></i></span> Book Club Admin  Posted {{postProp?.createdAt}}
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
    postProp: { type: Object, required: true }
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