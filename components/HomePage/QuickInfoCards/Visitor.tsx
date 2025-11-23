"use client"
import { Badge } from '@/components/ui/badge';
import React, { useEffect } from 'react'

interface PageProps {
    visitors:number
}

const Visitor:React.FC<PageProps> = ({visitors}) => {
  useEffect(()=>{
   const saveVisitor = async () => {
     try {
       if (!navigator.geolocation) {
         console.log("Geolocation not supported");
         return;
       }

       navigator.geolocation.getCurrentPosition(
         async (pos) => {
           const lat = pos.coords.latitude;
           const lon = pos.coords.longitude;

           // Reverse geocode → state + country
           const geoRes = await fetch(
             `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
           );
           const geoData = await geoRes.json();

           const state = geoData?.address?.state || "Unknown";
           const country = geoData?.address?.country || "Unknown";

           // Call your API
           await fetch("/api/v1/addVisitor", {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify({ state, country }),
           });
         },

         (err) => {
           console.log("Location error:", err.message);
         },
         { enableHighAccuracy: true, timeout: 5000 }
       );
     } catch (error) {
       console.log("Visitor error:", error);
     }
   };

    if(typeof  window !=="undefined"){

      const  savedVisit = localStorage.getItem("savedVisit");

      if(!savedVisit){
        saveVisitor();
      }
    }
  }, [])
  return (
    
    <Badge>Visitors: {visitors}</Badge>
  );
}



export default Visitor
