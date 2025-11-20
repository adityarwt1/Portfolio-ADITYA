"use client";
import React, { useEffect, useState } from "react";
import Visitor from "./Visitor";
import InterViews from "./InterViews";

const QuickInfoCards = () => {
  const [visitors, setVisitors] = useState<number>(0);

  useEffect(() => {
    const getVisitors = async () => {
      try {
        const res = await fetch("/api/v1/getVisitorsCount");
        const data = await res.json();
        setVisitors(data.visitors);
      } catch (err) {
        console.log(err);
      }
    };

    const saveVisitor = () => {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const latitude = pos.coords.latitude;
          const longitude = pos.coords.longitude;
          
          const webResponse = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );

          const dataweb = await webResponse.json();
          try {
            const res = await fetch("/api/v1/addVisitor", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                state: dataweb?.address?.state,
                country: dataweb?.address?.country,
              }),
            });

            const data = await res.json();
            if (data.success) {
              setVisitors((prev) => prev + 1);
              localStorage.setItem(
                "savedVisit",
                JSON.stringify({ latitude, longitude })
              );
            }
          } catch (err) {
            console.log(err);
          }
        },
        (err) => {
          console.log("Location error:", err);
        }
      );
    };

    getVisitors();

    const saved = localStorage.getItem("savedVisit");
    if (!saved) {
      saveVisitor();
    }
  }, []);

  return (
    <div className="flex gap-2">
      <Visitor visitors={visitors}/>
      <InterViews/>
    </div>
  );
};

export default QuickInfoCards;
