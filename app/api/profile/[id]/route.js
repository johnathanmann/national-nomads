import { connectToDB } from "@utils/database"
import Review from '@models/Review'
export const GET = async (req, {params}) => {

    try{
        await connectToDB();
        const reviews = await Review.find({userId: params.park})

        return new Response(JSON.stringify(reviews), {status:201})
    } catch(error){
        return new Response('Failed to get reviews', error)
    }
}
