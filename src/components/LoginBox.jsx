import React, { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function LoginBox({ setLoginBox }) {
  const div = useRef();

  const Slider = () => {
    return (
      <>
        <div className="">
          <div className="flex gap-2">
            <img src="/mov.png" className="h-32" />
            <img src="/mov.png" className="h-32" />
            <img src="/mov.png" className="h-32" />
            <img src="/mov.png" className="h-32" />
            <img src="/mov.png" className="h-32" />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        className="h-screen w-screen flex justify-center items-center absolute top-0 left-0 z-10 bg-[rgba(0,0,0,0.7)]"
        onClick={(e) => {
          e.stopPropagation();
          if (e.target === div.current) {
            setLoginBox(false);
          }
        }}
        ref={div}
      >
        <div className="h-2/3 w-7/12 rounded-xl flex justify-center items-center bg-[rgb(32,32,32)] overflow-hidden">
          <div className="h-full w-1/2 overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full w-full overflow-hidden bg-gradient-to-r from-[#bbbbbb93] via-[#343434c3] to-[#1f1f1f]"></div>
            <Slider />
            <Slider />
            <Slider />
          </div>

          <div className="h-full w-1/2">
            <p className="flex justify-end">
              <AiOutlineClose
                className="text-4xl m-5 text-slate-500"
                onClick={() => {
                  setLoginBox(false);
                  console.log("afbjasdhbbfjsdbj");
                }}
              />
            </p>
            <p className="text-xl text-slate-100 font-semibold mb-5">
              Login or sign up to continue
            </p>

            <div>
              <div className="flex gap-3 span-div">
                <input
                  type="text"
                  className="border border-slate-500 rounded-lg p-3 bg-transparent w-20 text-slate-400 text-xl outline-none"
                  placeholder=""
                  value={"+91"}
                  disabled
                />
                <div className="relative">
                  <input
                    type="tel"
                    className="border border-slate-500 rounded-lg p-3 bg-transparent text-xl text-slate-100 font-semibold tracking-wide outline-none num-input w-full"
                    placeholder=""
                  />

                  <p
                    onClick={(e) => {
                      e.target.previousSibling.focus();
                    }}
                    className="text-slate-400 bg-[rgb(32,32,32)] input-span"
                  >
                    Enter mobile number
                  </p>

                  <AiOutlineClose className="text-2xl absolute -top-1 right-0 m-5 text-slate-300" />
                </div>
              </div>
              <p className="text-[10px] text-slate-400 mt-2">
                By proceeding you confirm that you are above 18 years of age and
                agree to the
                <br />
                Privacy Policy and Terms of Use
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
