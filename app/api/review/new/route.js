import { connectToDB } from "@utils/database"
import Review from '@models/Review'
export const POST = async (req, res) => {
    const {userId, parkId, review, timestamp } = await req.json();

    try{
        await connectToDB();
        const newReview = new Review ({
        user: userId,
        parkId,
        review,
        timestamp
        })
        console.log(newReview)

        await newReview.save();
        return new Response(JSON.stringify(newPrompt), {status:201})
    } catch(error){
        return new Response('Failed ot leave review', error)
    }
}
