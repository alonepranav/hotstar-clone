import React from "react";

export default function Sports_Popular() {
  return (
    <>
      <div className="min-h-screen w-screen bg-[#0f0f0ffd]">
        <div className="">
          <div>
            <div>
              <h4 className="text-[2.4rem] font-semibold text-white text-center py-16">
                Popular Sports
              </h4>
            </div>
            <div className="ml-32">
              <div className="flex flex-wrap gap-3">
                {[..."11111111".split("")].map((a, i) => {
                  return (
                    <div key={i}>
                      <div key={i}>
                        <div className="h-36 w-64 rounded relative overflow-hidden z-10 transition-all">
                          <img
                            src={`/sports/popular/${i}.png`}
                            alt="Sports"
                            className="h-full w-full"
                          />
                        </div>
                      </div>
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
