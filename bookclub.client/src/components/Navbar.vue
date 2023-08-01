<template>
  <nav class="navbar navbar-expand-lg navbar-dark dark-blue-bg px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <h1>
          <i class="mdi mdi-book-open-page-variant-outline"></i>
          <span class="navbar-font"> Jabb</span>
        </h1>
      </div>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto text-end">
        <li>
          <router-link :to="{ name: 'About Us' }" class="btn text-light selectable">
            About Us
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Books' }" class="btn text-light selectable">
            Books
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Book Clubs' }" class="btn text-light selectable">
            Book Clubs
          </router-link>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>

<script>
import Login from './Login.vue';
export default {
  setup() {
    return {}
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>
