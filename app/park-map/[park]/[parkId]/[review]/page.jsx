'use client'
import { useSession } from "next-auth/react";
import { useParams } from 'next/navigation'
import { useState } from "react";
import { useRouter } from "next/navigation";
import timestamp from "time-stamp";
import Form from '@components/Form'
export default function Review (){
    const params = useParams();
    const router = useRouter();
    const { data: session } = useSession();
    const myString = params.review;
    let nameArr = myString.split("%20");
    nameArr = nameArr.join(" ")

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        body: ''
    })

    const createReview = async (e) =>{
        e.preventDefault();
        setSubmitting(true);
        try {
            const response = await fetch ('/api/review/new', {
                method: 'POST',
                body:  JSON.stringify({
                    review: post.review,
                    userId: session?.user.id,
                    parkId: params.parkId,
                    timestamp: timestamp('YYYY/MM/DD')
                })
            })
            if(response.ok){
                console.log(response)
                router.push(`/park-map/`+params.park+`/`+params.parkId)
            }
        } catch(error){
            console.log(error)
        } finally {
            setSubmitting(false)
        }
    }
    return(
        <div>
            <h1>Review {nameArr}</h1>
            <Form
            type={'Create'}
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={createReview}
            />
        </div>
    )
}