import {Schema, model, models} from 'mongoose';


const ReviewSchema = new Schema({
    parkId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
})

const User = models.User || model("User", UserSchema);

export default User; 