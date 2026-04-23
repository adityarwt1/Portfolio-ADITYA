import React from "react";

// Chote badges ke liye reusable component
const SkeletonBadge = () => (
  <div className="h-8 w-28 md:w-32 rounded-lg bg-zinc-800 animate-pulse border border-zinc-700/50"></div>
);

// Skills ke circular icons ke liye
const SkillCircleSkeleton = ({ index }: { index: number }) => (
  <div
    className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-zinc-800 animate-pulse border border-zinc-700/30"
    style={{
      marginLeft: index === 0 ? 0 : "-0.6rem",
    }}
  ></div>
);

const HomeSkeleton = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-zinc-950 overflow-hidden">
      
      {/* 1. TOP BADGES SKELETON (Matching your page.tsx header) */}
      <div className="flex flex-wrap gap-1 md:gap-1.5 justify-center px-2 py-2 shrink-0 border-b border-zinc-800/50">
        <SkeletonBadge />
        <SkeletonBadge />
        <SkeletonBadge />
        <SkeletonBadge />
        <SkeletonBadge />
        <SkeletonBadge />
      </div>

      {/* 2. MAIN CONTENT SKELETON */}
      <div className="flex-1 flex flex-col min-h-0 justify-center">
        <div className="flex-1 flex items-center justify-center px-3 md:px-6 lg:px-12 py-6 md:py-8">
          <div className="w-full flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
            
            <div className="flex-1 flex flex-col gap-3 md:gap-4 w-full">
              {/* Title: Aditya Rawat placeholder */}
              <div>
                <div className="h-10 md:h-12 w-64 bg-zinc-800 rounded-lg animate-pulse"></div>
                <div className="h-1 w-16 bg-zinc-700 mt-2 rounded"></div>
              </div>

              {/* Description lines */}
              <div className="flex flex-col gap-2 mt-2">
                <div className="h-4 w-full bg-zinc-800/60 rounded animate-pulse"></div>
                <div className="h-4 w-[95%] bg-zinc-800/60 rounded animate-pulse"></div>
                <div className="h-4 w-[40%] bg-zinc-800/60 rounded animate-pulse"></div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-2">
                <div className="h-10 w-28 bg-zinc-800 rounded-lg animate-pulse"></div>
                <div className="h-10 w-28 bg-zinc-800 rounded-lg animate-pulse"></div>
              </div>
            </div>

          </div>
        </div>

        {/* 3. BOTTOM SKILLS SKELETON */}
        <div className="shrink-0 flex justify-start items-center py-4 md:py-5 border-t border-zinc-800/50 overflow-x-auto w-screen">
          <div className="flex items-center gap-0.5 md:gap-1 px-4">
            {/* Generating 10 circles to match your skills list look */}
            {[...Array(10)].map((_, i) => (
              <SkillCircleSkeleton key={i} index={i} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomeSkeleton;