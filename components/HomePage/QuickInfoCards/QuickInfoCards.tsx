"use client";
import React, { useEffect, useState } from "react";
import Visitor from "./Visitor";
import InterViews from "./InterViews";
import { getCurrentCompany } from "@/services/HomePage/quickInfoCards/getCurrentComapany";
import CurrentCompany from "./CurrentCompany";
import Leetcode from "./Leetcode";
import CurrentStack from "./CurrentStack";
import Expert from "./Experienced";
import { LeetCodeInfo } from "@/contexts/LeetCodeInfo";

interface CurrentCompany {
    success: boolean;
    company: { _id: string; companyName: string; joinedDate: number }
}

interface LeetCodeInterface{
  easy:number
  medium:number
  hard:number
}
const QuickInfoCards = () => {
  const [visitors, setVisitors] = useState<number>(0);
  const [interviewes, setInterviews] = useState<number>(0);
  const [currentCompany, setCurrentComapany] = useState<CurrentCompany>({
    success: true,
    company: {
      _id: "1234567899",
      companyName: "TripxPay",
      joinedDate: 1747506600000,
    },
  });
  const [leetcode , setLeetcode] = useState<LeetCodeInterface>({
    easy:0,
    medium:0,
    hard:0
  })

  useEffect(() => {
    const getVisitors = async () => {
      try {
        const res = await fetch("/api/v1/getVisitorsCount",{
          next:{revalidate:3600}
        });
        const data = await res.json();
        setVisitors(data.visitors);
      } catch (err) {
        console.log(err);
      }
    };

    
    const getInterview = async () => {
      try {

        const res = await fetch("/api/v1/getInterviewCount" ,{
          next:{revalidate:3600}
        });
        const data = await res.json();
        setInterviews(data.interviewes);
      } catch (error) {
        console.log(error);
      }
    };

    const saveVisitor = () => {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;

          const webResponse = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const dataweb = await webResponse.json();

          try {
            const res = await fetch("/api/v1/addVisitor", {
              next:{revalidate:3600},
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
        (err) => console.log("Location error:", err)
      );
    };

    const fetchCurrentCompany = async ()=>{
      try {
        const currentCompany = await getCurrentCompany();
        setCurrentComapany(currentCompany);
      } catch  {}
    }


    const init = async () => {
      
      await getVisitors(); // Step 1
      await getInterview(); // Step 2
      await fetchCurrentCompany()
      const saved = localStorage.getItem("savedVisit");

      if (!saved) {
        saveVisitor(); // Step 3
      }
    };

    init();
  }, []);

  return (
    <div className="flex gap-2 wrap-break-word flex-wrap">
      <Visitor visitors={visitors} />
      <InterViews interviewes={interviewes} />

      {/** current company infor */}
      {currentCompany?.company && (
        <CurrentCompany
          key={currentCompany.company._id}
          company={currentCompany.company}
          success={currentCompany.success}
        />
      )}
      <LeetCodeInfo>
        <Leetcode />
      </LeetCodeInfo>
      <CurrentStack />
      <Expert />
    </div>
  );
};

export default QuickInfoCards;
