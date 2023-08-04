<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 p-0">
        <img class="coverImg-style img-fluid" src="https://images.unsplash.com/photo-1551043047-1d2adf00f3fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" :alt=account.name>
      </div>
      <section class="col-12">
        <div class="row position-relative">
          <div class="col-12 position-absolute account-info-style align-items-center d-flex">
            <img class="img-fluid account-img me-4" :src=account.picture :alt=account.name>
            <p class="fs-2 fw-semibold pt-4">{{ account.name }}</p>
          </div>
        </div>
      </section>
    </section>

    <section class="row">
      <div class="col-12">
        <p>
          My Clubs
        </p>
      </div>
    </section>

    <section class="row mb-4">
      <div class="col-12">
        placeholder
      </div>
    </section>

    <section class="row mb-4">
      <div class="col-12">
        <p>
          My Booklist
        </p>
      </div>
    </section>

    <section class="row mb-4">
      <div class="col-12">
        placeholder
      </div>
    </section>
    
    <section class="row mb-4">
      <div class="col-12">
        <p>
          My Badges
        </p>
      </div>
    </section>

    <section class="row mb-4">
      <div class="col-12">
        placeholder
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
.coverImg-style{
  height: 20vh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.account-img{
  height: 13vh;
  width: 13vh;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

.account-info-style{
  top: 20vh;
}
</style>
