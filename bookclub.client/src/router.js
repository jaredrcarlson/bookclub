import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/bookclubs',
    name: 'Book Clubs',
    component: loadPage('BookClubsPage')
  },
  {
    path: '/createbookclub',
    name: 'Create Book Club',
    component: loadPage('CreateBookClubPage')
  },
  {
    path: '/books',
    name: 'Books',
    component: loadPage('BooksPage')
  },
  {
    path: '/aboutus',
    name: 'About Us',
    component: loadPage('AboutUsPage')
  },

  // FIXME - /:bookclubId parameter needs to be added
  {
    path: '/bookclubdetails',
    name: 'Book Club Details',
    component: loadPage('BookClubDetailsPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
