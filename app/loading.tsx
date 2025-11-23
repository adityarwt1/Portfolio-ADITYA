import React from "react";

const SkeletonBadge = () => (
  <div className="h-8 w-40 rounded-xl bg-zinc-200 dark:bg-zinc-700 animate-pulse"></div>
);

const HomeSkeleton = () => {
  return (
    <div
      className="
      w-full min-h-screen p-5 flex flex-col gap-4 
      bg-white dark:bg-black
      bg-[radial-gradient(circle,rgba(0,0,0,0.15)_1px,transparent_1px)]
      dark:bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)]
      bg-size-[20px_20px]
      animate-pulse
    "
    >
      {/* TOP BADGES */}
      <div className="flex flex-wrap justify-center gap-1">
        <SkeletonBadge />
        <SkeletonBadge />
        <SkeletonBadge />
        <SkeletonBadge />
        <SkeletonBadge />
        <SkeletonBadge />
      </div>

      {/* MAIN HERO SKELETON */}
      <div className="flex-1 flex justify-center items-center">
        <div className="flex flex-col items-center gap-4 w-full max-w-3xl px-10">
          {/* Name */}
          <div className="h-10 w-72 bg-zinc-200 dark:bg-zinc-700 rounded-xl"></div>

          {/* Paragraph lines */}
          <div className="w-full flex flex-col gap-2 items-center">
            <div className="h-4 w-[90%] bg-zinc-200 dark:bg-zinc-700 rounded-xl"></div>
            <div className="h-4 w-[85%] bg-zinc-200 dark:bg-zinc-700 rounded-xl"></div>
            <div className="h-4 w-[80%] bg-zinc-200 dark:bg-zinc-700 rounded-xl"></div>
            <div className="h-4 w-[70%] bg-zinc-200 dark:bg-zinc-700 rounded-xl"></div>
            <div className="h-4 w-[60%] bg-zinc-200 dark:bg-zinc-700 rounded-xl"></div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <div className="h-10 w-32 bg-zinc-200 dark:bg-zinc-700 rounded-xl"></div>
            <div className="h-10 w-32 bg-zinc-200 dark:bg-zinc-700 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSkeleton;
