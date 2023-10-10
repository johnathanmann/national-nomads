"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

const ParkMap = () => {
    const { data: session } = useSession();
    const [myPosts, setMyPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/profile/${session?.user.id}`);
          const data = await response.json();
    
          setMyPosts(data);
        };
    
        if (session?.user.id) fetchPosts();
      }, [session?.user.id]);
console.log(myPosts)
  return (
    <div>
        <h1>Profile</h1>
        
    </div>
  )
}

export default ParkMap