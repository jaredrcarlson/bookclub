import { Schema } from "mongoose";

export const ClubMemberSchema = new Schema({
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
  clubId: { type: Schema.Types.ObjectId, ref: 'Club', required: true },
  role: { type: String, enum: ['creator', 'admin', 'member'] }
}, { timestamps: true, toJSON: { virtuals: true } }
)

ClubMemberSchema.virtual('profile', {
  localField: 'creatorId',
  foreignField: 'id',
  justOne: true,
  ref: 'Account'
})