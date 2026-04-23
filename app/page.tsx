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
import MainContent from "@/components/HomePage/MainContent";
import { skills } from "@/constants/Skills";
import Image from "next/image";

const HomePage = async () => {
  await mongoconnect()

  const visitors = await Visitor.countDocuments()
  const interviews = await Interview.countDocuments()
  const company = await Interview.findOne({ active: true }).select(
    "companyName joinedDate"
  );
  const leetcode = await LeetCode.findOne()
  
  return (
    <div className="w-screen h-screen flex flex-col bg-zinc-950 bg-[radial-gradient(circle,rgba(224,224,224,0.05)_1px,transparent_1px)] bg-size-[20px_20px] overflow-x-hidden">
      {/* BADGES */}
      <div className="flex flex-wrap gap-1 md:gap-1.5 justify-center px-2 py-2 shrink-0 bg-zinc-950/30 backdrop-blur-sm border-b border-[#e0e0e0]/5">
        <Visitors visitors={visitors} />
        <InterViews interviewes={interviews} />
        {company?.active && <CurrentCompany company={company} success={true} />}
        <Leetcode
          key={leetcode?._id}
          easy={leetcode?.easy || 0}
          medium={leetcode?.medium || 0}
          hard={leetcode?.hard || 0}
        />
        <CurrentStack />
        <Expert />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-h-0 justify-center">
        {/* Center Content Area */}
        <div className="flex-1 flex items-center justify-center px-3 md:px-6 lg:px-12 py-6 md:py-8 overflow-y-auto">
          <MainContent />
        </div>

        {/* Skills Section */}
        <div className="shrink-0 flex justify-start items-center py-4 md:py-5 border-t border-[#e0e0e0]/5 bg-zinc-950/30 backdrop-blur-sm overflow-x-auto w-screen">
          <div className="flex items-center gap-0.5 md:gap-1 px-2 md:px-4 whitespace-nowrap">\n            {skills.map((skill, index) => (
              <div
                key={index}
                className="relative shrink-0 group"
                style={{
                  marginLeft: index === 0 ? 0 : "-0.6rem",
                  zIndex: skills.length - index,
                }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center p-1.5 md:p-2 lg:p-3 bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-lg border border-[#e0e0e0]/10 hover:border-[#e0e0e0]/30 hover:shadow-xl hover:shadow-[#e0e0e0]/20 transition-all duration-300">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={skill.imageUrl}
                      alt={skill.name}
                      fill
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                </div>
                {/* Tooltip on hover */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-zinc-800/90 text-[#e0e0e0] text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;