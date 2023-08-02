<template>
  <router-link :to="{name:'Book Club Details', params:{clubId: clubProp.id}}">
    <div class="mx-3">
      <div>
        <img class="img-fluid card-img" :src=clubProp.coverImg alt="card img">
      </div>
      <div class="dark-blue-bg p-3 text-light">
        <p class="fs-5">
          {{ clubProp.name }}
        </p>
        <p>
          {{ clubProp.description }}
        </p>
        <!-- FIXME - Add memberCount to model and to the following element -->
        <div class="d-flex justify-content-between">
          <span>
            25 club members
          </span>
          <button class="btn orange-btn">
            Join Club
          </button>
        </div>
      </div>
    </div>
  </router-link>
</template>


<script>
import { Club } from '../models/Club.js';

export default {
  props:{
    clubProp: {type: Club, required: true}
  },
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>
.card-img{
  height:20vh;
  object-fit: cover;
  object-position: center;
}
</style>
