"use server"
import QuickInfoCards from "@/components/HomePage/QuickInfoCards/QuickInfoCards";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen p-5 flex flex-col gap-4">
      <QuickInfoCards />
    </div>
  );
};

export default HomePage;
