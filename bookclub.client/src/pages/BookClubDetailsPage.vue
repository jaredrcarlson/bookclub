<template>
<div class="container-fluid" v-if="selectedClub">
    <section class="row">
      <div class="col-md-4 col-12 d-flex flex-column">
        <div>
          <img class="img-fluid card-img" :src=selectedClub.coverImg alt="card img">
        </div>
        <div class="dark-blue-bg rounded-bottom text-light fw-bold fs-4 text-center p-1">
          <p class="m-0">
            {{ selectedClub.name }}
          </p>
        </div>
        <div class="dark-blue-bg mt-3 rounded-top p-3 fs-5">
          <router-link :to="{name:'Club About Page'}">
            <p class="route-text" type="button">
              <i class="mdi mdi-bookmark"></i> About us
            </p>
          </router-link>

          <router-link :to="{name: 'Club Announcement Page'}">
            <p class="route-text" type="button">
              <i class="mdi mdi-flag-variant"></i> Announcements
            </p>
          </router-link>

          <router-link :to="{name:'Club List Page'}">
            <p class="route-text" type="button">
              <i class="mdi mdi-format-list-bulleted"></i> Book List
            </p>
          </router-link>

          <router-link :to="{name: 'Club Discussion Page'}">
            <p class="route-text" type="button">
              <i class="mdi mdi-forum"></i> Discussion Board
            </p>
          </router-link>

          <router-link :to="{name: 'Club Member Page'}">
            <p class="route-text" type="button">
              <i class="mdi mdi-account-multiple"></i> Member List
            </p>
          </router-link>

        </div>
      </div>
      <div class="col-md-8 col-12">
        <router-view>

        </router-view>
      </div>
    </section>
  </div>
  <div class="container-fluid" v-else>
    <section class="row">
      <div class="col-12">
        <h2 class="text-light m-4">
          Loading... <i class="mdi mdi-loading mdi-spin"></i>
        </h2>
      </div>
    </section>
  </div>
</template>


<script>
import { useRoute } from 'vue-router';
import { clubsService } from '../services/ClubsService.js';
import { membersService } from '../services/MembersService.js';
import { computed, watchEffect } from 'vue';
import { AppState } from '../AppState.js';


export default {
  setup(){
    const route = useRoute()

    async function getClubById(){
      const clubId = route.params.clubId

      await clubsService.getClubById(clubId)
    }

    async function getMembersByClubId(){
      const clubId = route.params.clubId

      await membersService.getMembersByClubId(clubId)
    }

    watchEffect(()=> {
      getClubById(route.params.clubId)
      getMembersByClubId()
    })

    return {
      route,
      selectedClub: computed(() => AppState.selectedClub)
    }
  }
}
</script>


<style lang="scss" scoped>
.card-img{
  height: 30vh;
  object-fit: cover;
  object-position: center;
}

.route-text{
  color: #e9ecef;
}

.route-text:hover{
  color: #FB5607;
}
</style>
