import {Schema, model, models} from 'mongoose';


const ReviewSchema = new Schema({
    parkId: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    }
})

const Review = models.Review || model("Review", ReviewSchema);

export default Review; 