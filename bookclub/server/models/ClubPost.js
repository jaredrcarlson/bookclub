import { Schema } from "mongoose";

export const ClubPostSchema = new Schema({
  clubId: { type: Schema.Types.ObjectId, required: true, ref: 'Club' },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
  body: { type: String, required: true, minLength: 3, maxLength: 200 },
  title: { type: String, required: true, minlength: 3, maxLength: 100 },
  isAnnouncement: { type: Boolean, default: false }
}, { timestamps: true, toJSON: { virtuals: true } }
)

ClubPostSchema.virtual('commentCount', {
  localField: 'commentId',
  foreignField: '_id',
  ref: 'comment',
  count: true
})

ClubPostSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})