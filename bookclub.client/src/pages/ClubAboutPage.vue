<template>
  <div class="container-fluid" v-if="selectedClub">
    <section class="row">
      <div class="col-12">
        <h1 class="m-3">
          About the Club
        </h1>
        <div>
          <button class="btn orange-btn" @click="becomeMember()">
            Join Club
          </button>
        </div>
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
import { computed, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import { useRoute } from 'vue-router';
import { membersService } from '../services/MembersService.js';

export default {
  setup(){
    const route = useRoute()

    watchEffect(() => {
      getClubMembers(route.params.clubabout)
    })

    async function getClubMembers(){

    }

    return {
      selectedClub: computed(() => AppState.selectedClub),

      async becomeMember(){
        const clubId = route.params.clubId

        const memberData = {clubId: clubId}

        await membersService.becomeMember(memberData)
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>