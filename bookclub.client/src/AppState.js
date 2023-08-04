import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  /** @type {import('./models/Club.js').Club[]} */
  clubs: [],

  /** @type {import('./models/Club.js').Club | null} */
  selectedClub: null,

  /** @type {import('./models/Member.js').Member | null} */
  myMemberships: null,

  /** @type {import('./models/Book.js').Book[]} */
  books: [],

  /** @type {import('./models/Book.js').Book[]} */
  booksToAdd: [],

  /** @type {import('./models/Book.js').Book} */
  selectedBook: null,

  /** @type {import('./models/Book.js').Book} */
  bookDetailsBook: null,
  bookDetailsClubs: {
    /** @type {import('./models/Club.js').Club[]} */
    planned: [],
    /** @type {import('./models/Club.js').Club[]} */
    reading: [],
    /** @type {import('./models/Club.js').Club[]} */
    finished: []
  },
  bookDetailsUserReviews: [],

  /** @type {import('./models/Member.js').Member[]} */
  members: [],

  /** @type {import('./models/ClubPost.js').ClubPost[]} */
  clubPosts: [],

  /** @type {import('./models/ClubPost.js').ClubPost} */
  activeClubPost: null,

  /** @type {import('./models/PostComment.js').PostComment[]} */
  postComments: []

})
