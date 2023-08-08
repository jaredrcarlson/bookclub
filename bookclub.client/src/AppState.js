import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  /** @type {import('./models/Account.js').Account | null} */
  profile: null,

  /** @type {import('./models/Member.js').Member | null} */
  profileMemberships: null,

  profileBooks: null,

  profileBadges: null,

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

  /** @type {import('./models/Book.js').Book | null} */
  myBooks: null,

  /** @type {import('./models/Book.js').Book} */
  selectedBook: null,

  bookDetailsPage: {
    /** @type {import('./models/Book.js').Book} */
    book: null,
    clubs: {
      /** @type {import('./models/Club.js').Book[]} */
      planned: [],
      /** @type {import('./models/Club.js').Book[]} */
      reading: [],
      /** @type {import('./models/Club.js').Book[]} */
      finished: []
    },
    /** @type {import('./models/Book.js').Book[]} */
    userBooks: [],
    /** @type {import('./models/Club.js').Club[]} */
    userClubs: [],
    /** @type {import('./models/Club.js').Club[]} */
    userCreatorAdminClubs: [],
    /** @type {import('./models/BookReview.js').BookReview[]} */
    userReviews: [],
    userReviewedStatus: true
  },

  /** @type {import('./models/Member.js').Member[]} */
  members: [],

  /** @type {import('./models/ClubPost.js').ClubPost[]} */
  clubPosts: [],
  /** @type {import('./models/ClubPost.js').ClubPost[]} */
  clubAnnouncements: [],

  /** @type {import('./models/ClubPost.js').ClubPost} */
  activeClubPost: null,
  /** @type {import('./models/ClubPost.js').ClubPost} */
  activeClubAnnouncement: null,

  /** @type {import('./models/PostComment.js').PostComment[]} */
  postComments: [],
  activeComment: null,

  nextPage: null,
  prevPage: null
})
