import {Schema, model, models} from 'mongoose';


const ParkSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    parkId: {
        type: String,
        unique: true,
        required: true
    },
    reviews: [
        {
        type: Schema.Types.ObjectId,
        ref: "Review",
        },
    ],
})

const Park = models.Park || model("Park", ParkSchema);

export default User; 