<template>
<div class="container-fluid">
    <section class="row">
      <div class="col-md-3 col-12 d-flex flex-column">
        <div>
          <img class="img-fluid card-img" src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="card img">
        </div>
        <div class="dark-blue-bg rounded-bottom text-light fw-bold fs-4 text-center p-1">
          <p class="m-0">
            Sci-Fi Group
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
      <div class="col-md-9 col-12">
        <router-view>

        </router-view>
      </div>
    </section>
  </div>
</template>


<script>
import { useRoute } from 'vue-router';
import { clubsService } from '../services/ClubsService.js';
import { watchEffect } from 'vue';


export default {
  setup(){
    const route = useRoute()

    async function getClubById(){
      const clubId = route.params.clubId

      await clubsService.getClubById(clubId)
    }

    watchEffect(()=> {
      getClubById(route.params.clubId)
    })

    return {
      route,
    }
  }
}
</script>


<style lang="scss" scoped>
.card-img{
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
