'use client';

import { useState, useEffect } from "react";
import API_KEY  from "../apiKey";
import { useParams } from 'next/navigation'
const Park = () => {
const [singlePark, setPark] = useState();
const params = useParams();

async function getPark(){
    console.log(params)
    fetch("https://developer.nps.gov/api/v1/parks?parkCode="+params.park+"&api_key="+API_KEY)
    .then((response) => response.json())
    .then((json) => {
          setPark(json.data)
    })
    .catch((error) => console.error(`Error fetching data: ${error.message}`));
};

useEffect(() => {
    getPark();
  }, []);
  console.log(singlePark[0].fullName)
  return (
    <div></div>
  )
}

export default Park;
