import React from "react";
import { Card } from "./Explore";

export default function Movies_Family() {
  return (
    <>
      <div className="min-h-screen w-screen bg-[#0f0f0ffd]">
        <div className="">
          <div>
            <div>
              <h4 className="text-[2.4rem] font-semibold text-white text-center py-16">
                Family
              </h4>
            </div>
            <div className="ml-32">
              <div className="flex flex-wrap gap-3">
                {[..."1111111111111111111111".split("")].map((a, i) => {
                  return (
                    <div key={i}>
                      <Card {...{ i, path: "movies/family/" }} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
