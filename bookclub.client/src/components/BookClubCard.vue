<template>
  <router-link class="h-100" :to="`/bookclubdetails/${clubProp.id}/clubabout`">
    <div class="mx-3 h-100">
      <img class="img-fluid card-img" :src=clubProp.coverImg alt="card img">
      <div class="card-content dark-blue-bg p-3 text-light">
        <p class="fs-5">
          {{ clubProp.name }}
        </p>
        <p>
          {{ computedDescription(clubProp.description) }}
        </p>
        <div class="d-flex justify-content-between">
          <span>
            <span>{{ clubProp.memberCount }}</span> club members
          </span>
          <!-- <button class="btn orange-btn">
            Join Club
          </button> -->
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
    return {
      computedDescription(str) {
        if (str.length > 100) {
          return str.substring(0,126) + "..."
        }
        return str
      },
    }
  }
}
</script>


<style lang="scss" scoped>
.card-img{
  height:50%;
  object-fit: cover;
  object-position: center;
}

.card-content {
  height: 50%;
}

</style>
