<template>
<div class="container-fluid">
    <section class="row">
      <div class="col-12 p-0">
        <img class="coverImg-style img-fluid" src="https://images.unsplash.com/photo-1551043047-1d2adf00f3fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" :alt=account.name>
      </div>
      <section class="col-12 mb-5">
        <div class="row">
          <div class="col-12 account-info-style align-items-center d-flex">
            <img class="img-fluid account-img me-4" :src=account.picture :alt=account.name>
            <div class="fs-2 pt-5 d-flex align-items-center">
              <p class="pe-2 m-0">
                {{ account.name }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section class="row">
      <div class="col-12">
        <p class="m-3 fs-1">
          Clubs
        </p>
      </div>
    </section>

    <section class="row mb-4" v-if="Array.isArray(myMemberships) && account.id">
      <div class="col-md-4 col-12 my-3" v-for="membership in myMemberships" :key="membership.id">
          <div class="mx-3">
            <router-link :to="(`bookclubdetails/${membership.club.id}/clubabout`)">
              <div>
                <img class="img-fluid card-img" :src=membership.club.coverImg alt="card img">
              </div>
            </router-link>

            <div class="dark-blue-bg p-3 text-light">
              <p class="fs-5">
                {{ membership.club.name }}
              </p>
              <p>
                {{ membership.club.description }}
              </p>
            </div>
          </div>
      </div>
    </section>

    <section class="row mb-4">
      <div class="col-12">
        <p class="m-3 fs-1">
          Booklist
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
        <p class="m-3 fs-1">
          Badges
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
import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import Pop from '../utils/Pop.js';
import { profilesService } from '../services/ProfilesService.js';

export default {
  setup(){

    const route = useRoute()

    async function getProfile(){
      try {
        const profileId = route.params.profileId

        await profilesService.getProfile(profileId)
      } catch (error) {
        Pop.error(error.message)
      }
    }

    async function getProfileMemberships(){

    }

    watchEffect(() => {
      getProfile(route.params.profileId)
      getProfileMemberships()
    })

    return {
      route,
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
