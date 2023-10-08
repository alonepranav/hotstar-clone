import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

export const Card = ({ i, path }) => {
  return (
    <>
      <div className={`h-60 mb-6 w-[11.4rem] rounded-md overflow-hidden`}>
        <img src={`/${path}/${i}.png`} className="h-full w-full object-cover" />
      </div>
    </>
  );
};

export default function Explore() {
  return (
    <>
      <div className="h-full bg-[#0f0f0ffd] pl-28 pr-20">
        <div>
          <div className="relative pt-8">
            <FiSearch className="absolute text-3xl top-12 left-4 text-white" />
            <input
              placeholder="Movies, shows and more"
              type="search"
              className="h-5 px-16 text-xl py-8 rounded-lg w-full outline-none bg-[rgba(255,255,255,0.1)] text-white"
            />
            <AiOutlineClose className="absolute text-3xl top-12 right-5 text-white" />
          </div>

          <div className="mt-12">
            <p className="text-xl text-stone-200 font-semibold">
              Popular Searches
            </p>

            <div className="mt-4">
              <div className="flex justify-start flex-wrap gap-2">
                {[
                  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                ].map((a, i) => {
                  return <Card key={i} {...{ i, path: "images" }} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
