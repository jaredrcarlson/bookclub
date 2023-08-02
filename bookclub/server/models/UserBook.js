import { Schema } from "mongoose";

export const UserBookSchema = new Schema({
  creatorId: { type: Schema.Types.ObjectId, required: true },
  gbId: { type: String, required: true },
  title: { type: String, required: true },
  imgUrl: { type: String },
  author: { type: String, required: true },
  status: { type: String, enum: ['planned', 'reading', 'finished'], required: true, default: 'planned' }
}, { timestamps: true, toJSON: { virtuals: true } })