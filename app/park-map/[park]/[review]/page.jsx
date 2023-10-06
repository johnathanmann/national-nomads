'use client'

import { useParams } from 'next/navigation'

export default function Review (){
    const params = useParams();
    const myString = params.review;
    let nameArr = myString.split("%20");
    nameArr = nameArr.join(" ")
    console.log(nameArr); 
    return(
        <h1>Review {nameArr}</h1>
    )
}