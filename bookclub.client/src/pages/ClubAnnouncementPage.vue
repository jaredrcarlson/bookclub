<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12">
        <p class="m-3 fs-1">
          Announcements
        </p>
      </div>
      <div class="col-12">
        <p v-if="account?.id == clubCreator?.profile.id || account?.id == clubAdmin?.profile?.id" class="m-3 fs-1">
          <!-- v-if="selectedClub?.creatorId == member.creatorId" -->
          <PostForm :isAnnouncement="true"/>
        </p>
      </div>
    </section>
    <section class="row">
      <div v-for="announcement in announcements" :key="announcement.id" class="col-12 border border-black elevation-2 mb-3 rounded bg-light">
        <AnnouncementCard :announcementProp="announcement"/>
      </div>
    </section>
  </div>
</template>


<script>
import { computed, watchEffect } from "vue";
import PostCard from "../components/PostCard.vue";
import PostForm from "../components/PostForm.vue";
import { AppState } from "../AppState.js";
import Pop from "../utils/Pop.js";
import { useRoute } from "vue-router";
import { clubPostsService } from "../services/ClubPostsService.js";
import AnnouncementCard from "../components/AnnouncementCard.vue";

export default {
    setup() {
      const route = useRoute()
      async function getClubAnnouncements(){
        try {
          const clubId = route.params.clubId
          await clubPostsService.getClubAnnouncements(clubId)
        } catch (error) {
          Pop.error(error.message)
        }
      }
      watchEffect(() => {
        getClubAnnouncements();
      })
        return {
          announcements: computed(() => AppState.clubAnnouncements),
          member: computed(() => AppState.members),
          clubCreator: computed(() => 
            AppState.members.find(m => m.role == 'creator')
          ),
          clubAdmin: computed(() => AppState.members.find(m => m.role == 'admin')),
          account: computed(() => AppState.account),
          selectedClub: computed(() => AppState.selectedClub),
        };
    },
    components: {  PostForm, AnnouncementCard }
}
</script>


<style lang="scss" scoped>
.avatar-img{
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
</style>
