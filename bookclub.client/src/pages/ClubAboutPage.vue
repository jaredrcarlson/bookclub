<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12">
        <h1 class="m-3">
          About the Club
        </h1>
        <div v-if="loadingRef == false && account.id && Array.isArray(myMemberships)">
          <button class="btn orange-btn" @click="leaveClub()" title="Leave Club" v-if="inClub">
            <i class="mdi mdi-account-minus"></i> Leave Club
          </button>
          <button class="btn orange-btn" @click="becomeMember()" title="Join Club" v-else>
            <i class="mdi mdi-account-plus"></i> Join Club
          </button>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import { computed, ref, watchEffect} from 'vue';
import { AppState } from '../AppState.js';
import { useRoute } from 'vue-router';
import { membersService } from '../services/MembersService.js';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';

export default {
  setup(){
    const route = useRoute()

    let loadingRef = ref(false)

    watchEffect(() =>{

    })

    return {
      selectedClub: computed(() => AppState.selectedClub),
      inClub: computed(() => {
        const foundClub = AppState.myMemberships.find(c => c.clubId == route.params.clubId)
        logger.log(foundClub)
        logger.log(AppState.myMemberships)
        return foundClub
      }),
      account: computed(() => AppState.account),
      myMemberships: computed(() => AppState.myMemberships),
      loadingRef,
      route,

      async becomeMember(){
        try {

          loadingRef.value = true

          const clubId = route.params.clubId

          const memberData = {clubId: clubId}

          await membersService.becomeMember(memberData)

          Pop.success('You are now a member of this club.')

          loadingRef.value = false
        } catch (error) {
          Pop.error(error.message)
        }
      },

      async leaveClub(){
        try {
          loadingRef.value = true

          const memberToRemove = AppState.members.find(m => m.creatorId == AppState.account.id)

          const memberId = memberToRemove.id

          logger.log(memberId)

          await membersService.leaveClub(memberId)

          Pop.success('You have left this club.')

          loadingRef.value = false
        } catch (error) {
          Pop.error(error.message)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>