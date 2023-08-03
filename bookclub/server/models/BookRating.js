import { Schema } from "mongoose";

export const BookRatingSchema = new Schema({
    gbId: { type: String, required: true },
    creatorId: { type: Schema.Types.ObjectId, required: true },
    rating: { type: Number, required: true, min: 0, max: 10 }
}, { timestamps: true, toJSON: { virtuals: true } })