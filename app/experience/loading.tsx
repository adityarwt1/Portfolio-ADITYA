"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const SkeletonBar = ({ w }: { w: string }) => (
  <div className={`h-4 ${w} bg-zinc-200 dark:bg-zinc-700 rounded-md`} />
);

const SkeletonBadge = () => (
  <div className="h-7 w-20 bg-zinc-200 dark:bg-zinc-700 rounded-md" />
);

const SkeletonLogo = () => (
  <div className="w-[100px] h-[100px] bg-zinc-200 dark:bg-zinc-700 rounded-lg" />
);

export default function ExperienceLoadingScreen() {
  return (
    <div
      className="
      w-full min-h-screen p-6 flex flex-col gap-6 
      animate-pulse
      "
    >
      {/* Title Skeleton */}
      <div className="flex justify-center">
        <div className="h-10 w-60 bg-zinc-200 dark:bg-zinc-700 rounded-md" />
      </div>

      {/* 3 Example Cards */}
      {[1, 2, 3].map((_, idx) => (
        <Card key={idx} className="w-full p-4 border border-white/10">
          <CardHeader>
            <div className="flex justify-between items-center">
              {/* Text block */}
              <div className="flex flex-col gap-2 w-full max-w-xs">
                <SkeletonBar w="w-40" />
                <SkeletonBar w="w-32" />
              </div>

              {/* Logo */}
              <SkeletonLogo />
            </div>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            {/* Description */}
            <div className="flex flex-col gap-2">
              <SkeletonBar w="w-full" />
              <SkeletonBar w="w-4/5" />
              <SkeletonBar w="w-3/5" />
            </div>

            <Separator />

            {/* Achievements */}
            <div className="flex flex-col gap-2">
              <SkeletonBar w="w-56" />
              {[1, 2, 3, 4].map((x) => (
                <SkeletonBar key={x} w="w-4/5" />
              ))}
            </div>

            <Separator />

            {/* Tech stack badges */}
            <div className="flex gap-2 flex-wrap">
              <SkeletonBadge />
              <SkeletonBadge />
              <SkeletonBadge />
            </div>

            <Separator />

            {/* Technical Achievements */}
            <div className="flex flex-col gap-2">
              <SkeletonBar w="w-64" />
              {[1, 2, 3].map((x) => (
                <SkeletonBar key={x} w="w-4/5" />
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
