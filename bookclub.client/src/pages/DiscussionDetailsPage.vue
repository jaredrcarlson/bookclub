<template>
  <div>Discussion Details Page</div>
  <div class="container-fluid">
    <section class="row mb-3">
      <div class="col-12 dark-blue-bg rounded elevation-5 text-light p-3">
        <h1>Pure SHIVERS Running Down My Spine</h1>
        <div class="d-flex">
          <div class="pe-4">
            <img class="avatar-img" src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhZHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="">
          </div>
          <div>
            <p class="fs-4">BookDiver929</p>
            <p class="fs-5 mb-4">
              <span class="orange-text"><i class="mdi mdi-star"></i></span> Book Club Admin  Posted July 31, 2079
            </p>
            <p class="fs-4">I can't hardly put this book down... how is everyone else feeling? This is making me want to do my own investigating, except for the fact I can't sleep... oh me oh my!!!</p>
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

    <section class="row">
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
export default {
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