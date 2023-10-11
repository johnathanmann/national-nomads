'use client'
import { useSession } from "next-auth/react";
import { useParams } from 'next/navigation'
import { useState } from "react";
import { useRouter } from "next/navigation";
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
            console.log(session)
            const response = await fetch ('/api/review/new', {
                method: 'POST',
                body:  JSON.stringify({
                    review: post.review,
                    userId: session?.user.id,
                    parkId: params.park
                })
            })
            if(response.ok){
                // router.push('/')
                console.log(response)
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