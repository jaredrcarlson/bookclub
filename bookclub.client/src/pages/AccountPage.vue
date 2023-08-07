<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 p-0">
        <div class="image-container">
          <img class="img-fluid account-img me-4" :src=account.picture :alt=account.name>
          <div class="account-name">
            <p class="fs-2 pe-2 m-0">
                {{ account.name }}
                <router-link :to="{name: 'Edit Account Page'}">
                  <i class="mdi mdi-pencil-box-outline fs-3 mt-md-2 mt-1 text-dark" type="button" title="Edit Account"></i>
                </router-link>
            </p>
          </div>
          <img v-if="!account.coverImg" class="coverImg-style img-fluid" src="https://images.unsplash.com/photo-1551043047-1d2adf00f3fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" :alt=account.name>
          <img v-else class="coverImg-style img-fluid" :src="account.coverImg" :alt=account.name>
        </div>
      </div>
    </section>

    <section class="row mt-5">
      <div class="col-12">
        <p class="m-3 fs-1">
          My Clubs
        </p>
      </div>
    </section>

    <section class="row mb-4" v-if="Array.isArray(myMemberships) && account.id">
      <div class="col-md-4 col-12 my-3" v-for="membership in myMemberships" :key="membership.id">
          <div class="membership-card mx-3">
            <router-link :to="({name: 'Club About Page', params: {clubId: membership.club.id}})">
                <img class="img-fluid card-img" :src=membership.club.coverImg alt="card img">
            </router-link>

            <div class="dark-blue-bg p-3 text-light card-description">
              <p class="fs-5">
                {{ membership.club.name }}
              </p>
              <p>
                {{ membership.club.description }}
              </p>

              <div class="mt-auto" v-if="loadingRef == false">
                <button class="btn orange-btn" @click="leaveClub(membership.id)" title="Leave Club">
                  <i class="mdi mdi-account-minus"></i> Leave Club
                </button>
              </div>
            </div>
          </div>
      </div>
    </section>

    <section class="row mb-4">
      <div class="col-12">
        <p class="m-3 fs-1">
          My Booklist
          <span class="fs-3">
            <i class="mdi mdi-book-multiple"></i> {{ myBooks.length }}
          </span>
        </p>
      </div>
    </section>

    <section class="row mb-4">
      <div class="col-12">
        <div style="overflow-x: auto;" class="ms-3">
          <table id="books">
            <tr>
              <th class="ps-2">
                Title
              </th>
              <th class="ps-2">
                Progress
              </th>
              <th class="ps-2">
                Rating
              </th>
            </tr>
            <tr v-for="book in currentBooks" :key="book.id">
              <BookListItem :bookProp="book" />
            </tr>
            <tr v-for="book in plannedBooks" :key="book.id">
              <BookListItem :bookProp="book" />
            </tr>
            <tr v-for="book in finishedBooks" :key="book.id">
              <BookListItem :bookProp="book" />
            </tr>
          </table>
        </div>
      </div>
    </section>
    
    <section class="row mb-4">
      <div class="col-12">
        <p class="m-3 fs-1">
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
import { computed, ref } from 'vue';
import { AppState } from '../AppState';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
import { membersService } from '../services/MembersService.js';
export default {
  setup() {
    let loadingRef = ref(false)

    return {
      loadingRef,
      account: computed(() => AppState.account),
      myMemberships: computed(() => AppState.myMemberships),
      myBooks: computed(() => AppState.myBooks),
      finishedBooks: computed(() => {
        let finishedBooks = AppState.myBooks.filter(b => b.status == 'finished')
        return finishedBooks
      }),
      plannedBooks: computed(() => {
        let plannedBooks = AppState.myBooks.filter(b => b.status == 'planned')
        return plannedBooks
      }),
      currentBooks: computed(() => {
        let currentBooks = AppState.myBooks.filter(b => b.status == 'reading')
        return currentBooks
      }),

      async leaveClub(memberId){
        try {
          const removeConfirm = await Pop.confirm('Are you sure you want to leave this club?')

          if(!removeConfirm){
            return
          }

          loadingRef.value = true

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

<style scoped>
.coverImg-style{
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.account-img{
  height: 17vh;
  width: 17vh;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  bottom: -8vh;
  left: 5vw;
  position: absolute;
}

.account-name {
  position: absolute;
  bottom: -7vh;
  left: 14vw;
}

.account-info-style{
  position: relative;
}

.card-img{
  height: 50%;
  object-fit: cover;
  object-position: center;
}
.card-description{
  height: 50%;
  display: flex;
  flex-direction: column;
}

.membership-card{
  height: 50vh;
}

.image-container {
  height: 30vh;
  position: relative;
}


table{
  width: 95%;
}

#books th{
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: lighter;
}

#books th, #books td{
  border-bottom: 1px solid #8f8f8f;
  padding: 7px;
}

.sub-text-style{
  font-weight: 100;
  font-size: smaller;
}

.large-text-style{
  font-size:large;
  font-weight: 600;
}

.status-text-style{
  font-size: large;
}

.author-text-style{
  font-size: smaller;
  font-weight: 500;
}
</style>
