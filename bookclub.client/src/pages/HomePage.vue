<template>
  <div class="container-fluid">
    <section class="row dark-blue-bg text-light">
      <div class="col-12 text-center mt-5 mb-3">

        <div class="mb-4">
          <h3 class="fw-bold">
            Find a <span class="orange-text">book club</span> right for you
          </h3>
          <h4>
            Discuss, rate, and enjoy the books you love with a community you create.
          </h4>
        </div>

        <div>
          <button class="btn orange-btn m-2">
            Find a Book Club
          </button>
          <button class="btn light-blue-btn m-2">
            Make a Book Club
          </button>
        </div>

      </div>
    </section>

    <section class="row">

      <div class="col-12 d-flex p-0">
        <img class="img-fluid home-banner flex-fill" src="https://images.unsplash.com/photo-1618414952052-289dab88b409?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="book shelf">
      </div>

    </section>

    <section class="row ghost-bg">
      <div class="col-12 mt-5">
        <h6>
          NY Times Best Sellers
        </h6>
      </div>
    </section>

    <section class="row ghost-bg">
      <div class="col-12 mt-5">
        <section class="row">

          <div class="col-md-6 col-12">
            <p class="fs-6 fw-medium ms-3">
              Bookclub List
            </p>
          </div>

          <div class="col-md-6 col-12 d-flex justify-content-end">
            <div class="mx-3">
              <button class="btn orange-btn">
                Create a Club
              </button>
            </div>

            <div>
              <form>
                <div class="d-flex me-3">
                  <label for="search"></label>
                  <input type="text" name="search" id="search" placeholder="Search clubs..." class="form-control">
                  <button class="btn orange-btn" title="Submit" type="submit">
                    <i class="mdi mdi-magnify"></i>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </section>
      </div>
    </section>

    

    <section class="row ghost-bg">

      <!-- FIXME Turn this section into a v-for over a club card component -->
      <div class="col-md-6 col-12 my-3">
        
      </div>

      <div class="col-md-6 col-12 my-3">
        <div class="mx-3">
          <div>
            <img class="img-fluid card-img" src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="card img">
          </div>
          <div class="dark-blue-bg p-3 text-light">
            <p class="fs-5">
              Sci-Fi Group
            </p>
            <p>
              Looking to the stars and beyond!
            </p>
            <div class="d-flex justify-content-between">
              <span>
                47 club members
              </span>
              <button class="btn orange-btn">
                Join Club
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import Pop from '../utils/Pop.js'
import { clubsService } from '../services/ClubsService.js'
import { onMounted } from 'vue'

export default {
  setup() {

    async function getAllClubs(){
      try {
        await clubsService.getAllClubs()
      } catch (error) {
        Pop.error(error.message)
      }
    }

    onMounted(() => {
      getAllClubs()
    })

    return {}
  }
}
</script>

<style scoped lang="scss">

.home-banner{
  height: 30vh;
  object-fit: cover;
  object-position: center;
}

.card-img{
  height:20vh;
  object-fit: cover;
  object-position: center;
}

</style>
