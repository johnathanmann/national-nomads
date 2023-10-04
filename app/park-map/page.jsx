'use client';

import { useState, useEffect } from "react";
import API_KEY  from "./apiKey";

const ParkMap = () => {
    const [parks, setParks] = useState();

    async function getParks(){
        console.log(API_KEY)
        fetch("https://developer.nps.gov/api/v1/parks?limit=2000&api_key="+API_KEY)
        .then((response) => response.json())
        .then((json) => {
            console.log(json.data.filter(function(i) {
                return i.designation === "National Park";
              }))
              setParks(json.data.filter(function(i) {
                return i.designation === "National Park";
              }))
        })
        .catch((error) => console.error(`Error fetching data: ${error.message}`));
};
useEffect(() => {
    getParks();
  }, []);

  return (
    <div>
        <h1>Parks</h1>
        {parks.map((item, index)=>{
                return <h1>{parks[index].fullName}</h1>})}
    </div>
  )
}

export default ParkMap