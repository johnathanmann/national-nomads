'use client';

import { useState, useEffect, componentDidMount } from "react";
import API_KEY  from "../apiKey";
import { useParams } from 'next/navigation'
const Park = () => {
const [singlePark, setPark] = useState([]);
const params = useParams();

async function getPark(){
    const response = await fetch("https://developer.nps.gov/api/v1/parks?parkCode="+params.park+"&api_key="+API_KEY);
    const park = await response.json();
    setPark(park.data[0])
};

useEffect(() => {
    getPark();
  }, [singlePark])
  return (
    <div><h1>{singlePark.fullName}</h1></div>
  )
}

export default Park;
