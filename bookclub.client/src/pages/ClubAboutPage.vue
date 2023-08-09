  <template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 mt-3 dark-blue-bg rounded elevation-3 text-light">
        <div class="p-3">
          <p class="fs-3 fw-bold">About us</p>
          <form @submit.prevent="editClub()">
          <input placeholder="club name..." v-model="editable.name" class="form-control mb-2" v-if="isEditing" type="text" >
          <textarea class="form-control mb-2" v-if="isEditing" v-model="editable.description" rows="10"></textarea>
          <p v-else class="fs-4">
            {{ selectedClub.description }}
          </p>
          <button type="submit" v-if="isEditing" class="btn light-blue-btn">Save Changes</button>
        </form>
          <div class="d-flex justify-content-between mt-5 align-items-end">

            <p class="fs-3">
              <i class="mdi mdi-account"></i> {{ selectedClub.memberCount }}
            </p>
            <p class="fw-light fs-5">
              <span class="pe-5">
                Created at: {{ selectedClub.createdAt.toLocaleDateString() }}
              </span>
              
            </p>
            <div v-if="loadingRef == false && account.id && Array.isArray(myMemberships) && (selectedClub.creatorId != account.id)">
              <button class="btn orange-btn fs-3" @click="leaveClub()" title="Leave Club" v-if="inClub">
                <i class="mdi mdi-account-minus"></i> Leave Club
              </button>
              <button class="btn orange-btn fs-3" @click="becomeMember()" title="Join Club" v-else>
                <i class="mdi mdi-account-plus"></i> Join Club
              </button>
            </div>

            <div v-if="selectedClub.creatorId == account.id">
              <button @click="enableEditing()"  class="btn light-blue-btn fs-3 me-2">Edit Club</button>
              <button @click="deleteClub()" class="btn orange-btn fs-3">Delete Club</button>
            </div>
          </div>
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
import { router } from '../router.js';
import { clubsService } from "../services/ClubsService.js";

export default {
  setup(){
    const route = useRoute()

    const isEditing = ref(false)
    const editable = ref({})

    let loadingRef = ref(false)

    watchEffect(() =>{

    })

    return {
      editable,
      isEditing,
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
      enableEditing(){
        isEditing.value = true
        editable.value = {...AppState.selectedClub}
      },
      async editClub(){
        try {
          // logger.log('did the submit button submit?')
          const clubData = editable.value
          // logger.log('club data...', clubData)
          await clubsService.editClub(clubData)
          isEditing.value = false
        } catch (error) {
          Pop.error(error.message)
        }
      },
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
          const removeConfirm = await Pop.confirm('Are you sure you want to leave this club?')

          if(!removeConfirm){
            return
          }

          loadingRef.value = true

          const memberToRemove = AppState.members.find(m => m.creatorId == AppState.account.id)

          const memberId = memberToRemove.id

          logger.log(memberId)

          await membersService.leaveClub(memberId)

          Pop.success('You have left this club.')

          loadingRef.value = false

          router.push({name: 'Home'})
        } catch (error) {
          Pop.error(error.message)
        }
      },
      async deleteClub(){
        try {
          const wantsToDelete = await Pop.confirm('Deleting your club is permanent, are you sure you want to let down your members?')
          if(!wantsToDelete){
            return
          }
          const clubId = route.params.clubId
          await clubsService.deleteClub(clubId)
          router.push({name: 'Home'})
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