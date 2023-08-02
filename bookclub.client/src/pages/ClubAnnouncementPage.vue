<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12">
        <p class="m-3 fs-1">
          Announcements
        </p>
      </div>
    </section>
    <section class="row">
      <!-- FIXME Make this into a v-for that pulls up all announcements with their title, creator, createdAt, and commentCount Put into a component. -->
      <div class="col-12 border border-black elevation-2 mb-3 rounded">
        <router-link>
        <section class="row align-items-center p-2">
          <div class="col-md-2 col-12">
            <img class="img-fluid avatar-img" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="">
          </div>
          <div class="col-md-8 col-12">
            <p class="fw-bold fs-3">
              Reading Chapters 1-3 by Friday!
            </p>
            <p>
              <span>BookDiver232 </span> <span>posted 12/16/2023</span>
            </p>
          </div>
          <div class="col-md-2 col-12">
            <p class="fs-5">
              <i class="mdi mdi-message-reply"></i> <span>10</span>
            </p>
          </div>
        </section>
      </router-link>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  setup(){
    return {}
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
