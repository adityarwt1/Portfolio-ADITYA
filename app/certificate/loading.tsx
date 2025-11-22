import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col p-4">
      {[1, 2, 3].map((val) => (
        <div key={val} className="mb-6">
          <div className="flex flex-row p-2 font-mono w-full items-center gap-5 h-full animate-pulse">
            {/* LEFT SKELETON */}
            <div className="flex flex-col gap-4 w-full">
              <div className="h-8 w-40 bg-white/20 rounded"></div>
              <div className="h-6 w-52 bg-white/15 rounded"></div>
              <div className="h-20 w-full bg-white/10 rounded"></div>

              <div className="flex flex-col gap-2">
                <div className="h-5 w-24 bg-white/15 rounded"></div>

                <div className="flex gap-2 flex-wrap">
                  {Array(4)
                    .fill(null)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="h-6 w-20 bg-white/20 rounded-full"
                      ></div>
                    ))}
                </div>
              </div>

              <div className="h-10 w-full bg-white/20 rounded-full"></div>
            </div>

            {/* IMAGE SKELETON */}
            <div className="w-full h-full flex justify-center">
              <div className="w-[600px] h-[350px] bg-white/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
