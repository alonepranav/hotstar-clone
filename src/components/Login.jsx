import React, { useEffect, useState } from "react";
import image from "../assets/devices.webp";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import LoginBox from "./LoginBox";

export default function Login() {
  const [loginBox, setLoginBox] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setLoginBox(false);
    });
  }, []);

  return (
    <>
      {loginBox && <LoginBox setLoginBox={setLoginBox} />}

      <div className="text-center bg-[#0f0f0ffd] h-screen">
        <div className="flex justify-end py-14">
          <button className="text-white text-xl font-semibold flex gap-2 items-center justify-center bg-[rgba(255,255,255,0.1)] px-7 py-3 mr-20 rounded-lg">
            <AiOutlineQuestionCircle />
            <span>Help & Support</span>
          </button>
        </div>

        <div>
          <img src={image} alt="" className="h-36 mx-auto" />
          <h5 className="my-3 text-white text-[1.7rem]">
            Login to Disney + Hotstar
          </h5>
          <p className="text-slate-300">
            Start watching from where you left off, personalise for kids and
            more
          </p>
          <button
            className="px-24 py-2.5 text-lg text-white font-bold tracking-widest mt-7 rounded-lg bg-gradient-to-r from-sky-400 to-blue-800"
            onClick={() => setLoginBox(true)}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
