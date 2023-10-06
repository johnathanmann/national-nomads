'use client'
import { useSession } from "next-auth/react";
import { useParams } from 'next/navigation'

export default function Review (){
    const params = useParams();
    
    const { data: session } = useSession();
    const myString = params.review;
    let nameArr = myString.split("%20");
    nameArr = nameArr.join(" ")
    console.log(nameArr); 
    return(
        <h1>Review {nameArr}</h1>
    )
}