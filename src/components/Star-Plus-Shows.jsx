import React from "react";
import { Card } from "./Explore";

export default function Star_Plus_Shows() {
  return (
    <>
      <div className="min-h-screen w-screen bg-[#0f0f0ffd]">
        <div className="">
          <div>
            <div>
              <h4 className="text-[2.4rem] font-semibold text-white text-center py-16">
                Star Plus Shows
              </h4>
            </div>
            <div className="ml-32">
              <div className="flex flex-wrap gap-3">
                {[..."11111111111111111111111111111111".split("")].map(
                  (a, i) => {
                    return (
                      <div key={i}>
                        <Card {...{ i, path: "star-plus-shows" }} />
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
