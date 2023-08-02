import { Schema } from "mongoose";

export const ClubSchema = new Schema({
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
  name: { type: String, minLength: 3, maxLength: 40, required: true },
  description: { type: String, minLength: 3, maxLength: 200, required: true },
  coverImg: { type: String, minLength: 3, maxLength: 300, required: true },

}, { timestamps: true, toJSON: { virtuals: true } })

ClubSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
ClubSchema.virtual('memberCount', {
  localField: 'memberId',
  foreignField: '_id',
  count: true,
  ref: 'ClubMember'
})