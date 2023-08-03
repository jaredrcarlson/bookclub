import { Schema } from "mongoose";

export const PostCommentSchema = new Schema({
  postId: { type: Schema.Types.ObjectId, required: true },
  creatorId: { type: Schema.Types.ObjectId, required: true },
  body: { type: String, minLength: 3, maxLength: 200, required: true },
}, { timestamps: true, toJSON: { virtuals: true } }
)

PostCommentSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})