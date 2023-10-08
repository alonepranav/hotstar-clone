import React from "react";
import i1 from "../assets/googleplay.png";
import i2 from "../assets/appstore.png";
import { FiFacebook, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <div>
      <footer className="text-gray-400 bg-[#0f0f0ffd] pl-20">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-semibold text-gray-200 text-lg mb-7">
                Company
              </h2>
              <nav className="list-none mb-10">
                <li className="mb-3">
                  <a>About Us</a>
                </li>
                <li>
                  <a>Career</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-semibold text-gray-200 text-lg mb-7">
                View Website In
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a>English</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-semibold text-gray-200 text-lg mb-7">
                Need Help?
              </h2>
              <nav className="list-none mb-10">
                <li className="mb-3">
                  <a>Visit Help Center</a>
                </li>
                <li>
                  <a>Share Feedback</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-semibold text-gray-200 text-center text-lg mb-3">
                Contact With Us
              </h2>
              <div className="flex justify-center items-center gap-8 mt-10 text-white text-2xl">
                <FiFacebook />
                <FiTwitter />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="ml-5">
              <p>&copy; 2023 STAR. All Rights Reserved.</p>
              <p>Terms Of Use &nbsp; Privacy Policy &nbsp; FAQ</p>
            </div>
            <div className="flex gap-3">
              <img src={i1} alt="" className="h-12 w-40" />
              <img src={i2} alt="" className="h-12 w-40" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
