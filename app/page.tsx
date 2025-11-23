"use server"
import React from "react";
import { mongoconnect } from "@/lib/mongodb";
import Visitor from "@/models/Visitors";
import Visitors from "@/components/HomePage/QuickInfoCards/Visitor";
import Interview from "@/models/Interviews";
import InterViews from "@/components/HomePage/QuickInfoCards/InterViews";
import CurrentCompany from "@/components/HomePage/QuickInfoCards/CurrentCompany";
import Leetcode from "@/components/HomePage/QuickInfoCards/Leetcode";
import LeetCode from "@/models/Leetcode";
import CurrentStack from "@/components/HomePage/QuickInfoCards/CurrentStack";
import Expert from "@/components/HomePage/QuickInfoCards/Experienced";

const HomePage = async () => {
  await mongoconnect()

  const visitors = await Visitor.countDocuments()
  const interviews = await Interview.countDocuments()
  const company = await Interview.findOne({ active: true }).select(
    "companyName joinedDate"
  );
  const leetcode = await LeetCode.findOne()
  return (
    <div className="w-full min-h-screen p-5 flex flex-col gap-4 ">
      <div className="flex flex-wrap gap-1">
        <Visitors visitors={visitors} />
        <InterViews interviewes={interviews} />
        <CurrentCompany company={company} success={true} />
        <Leetcode
          key={leetcode?._id}
          easy={leetcode.easy}
          medium={leetcode.medium}
          hard={leetcode.hard}
        />
        <CurrentStack />
        <Expert />
      </div>
    </div>
  );
};

export default HomePage;
