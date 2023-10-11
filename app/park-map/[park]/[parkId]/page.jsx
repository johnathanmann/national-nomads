'use client';

import Link from "next/link";
import { useState, useEffect, componentDidMount } from "react";
import API_KEY from "@app/park-map/apiKey";
import { useParams } from 'next/navigation'

const Park = () => {
const [singlePark, setPark] = useState([]);
const [reviews, setReviews] = useState();
const params = useParams();
console.log(params)
async function getPark(){
    const parkResponse = await fetch("https://developer.nps.gov/api/v1/parks?parkCode="+params.park+"&api_key="+API_KEY);
    const park = await parkResponse.json();
    setPark(park.data[0])
    const reviewResponse = await fetch(`/api/review/${params.parkId}`);
    const data = await reviewResponse.json();
    setReviews(data);
    console.log("reviews"+reviews)
};
console.log(reviews)
  useEffect(() => {
    getPark();
  }, [])
  return (
    <div>
        <h1>{singlePark.fullName}</h1>
        <button><Link href={`/park-map/`+singlePark.parkCode+"/"+singlePark.id+"/"+singlePark.fullName}>Review {singlePark.fullName}</Link></button>
    </div>
  )
}

export default Park;
