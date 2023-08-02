import mongoose, { mongo } from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { ClubSchema } from "../models/Club.js";
import { ClubMemberSchema } from "../models/ClubMember.js";
import { ClubPostSchema } from "../models/ClubPost.js";
import { ClubBookSchema } from '../models/ClubBook.js';
import { UserBookSchema } from '../models/UserBook.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Clubs = mongoose.model('Club', ClubSchema);
  ClubMembers = mongoose.model('Member', ClubMemberSchema);
  Posts = mongoose.model('Post', ClubPostSchema);
  ClubBooks = mongoose.model('ClubBook', ClubBookSchema);
  UserBooks = mongoose.model('UserBook', UserBookSchema);
}

export const dbContext = new DbContext()
