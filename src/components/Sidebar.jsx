import React from "react";
import logo from "../assets/logo.png";
import { FiChevronRight } from "react-icons/fi";
import { BiUserCircle, BiSearch } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";
import { PiTelevisionSimple } from "react-icons/pi";
import { MdOutlineLocalMovies, MdOutlineSportsBaseball } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div
        className="fixed z-10 top-0 left-0 h-screen w-28 bg-[#0f0f0ffd]"
        id="sidebar"
      >
        {/* Logo Div */}
        <div className="mt-5">
          <a href="/">
            <img src={logo} alt="" className="h-full w-full" />
          </a>
          <button className="rounded-full bg-[#2d1804e2] text-xs font-semibold px-2 py-1 mx-1 text-[#ffcc6db0] flex justify-center items-center gap-1">
            <span>Subscribe</span>
            <FiChevronRight />
          </button>
        </div>

        <div className="mt-16">
          <ul
            className="text-2xl text-[#919191] flex flex-col justify-center items-center"
            id="sul"
          >
            <Link to={"/login"}>
              <li>
                <BiUserCircle />
                <p>My Space</p>
              </li>
            </Link>
            <Link to={"/explore"}>
              <li>
                <BiSearch />
                <p>Search</p>
              </li>
            </Link>
            <Link to={"/"}>
              <li>
                <GoHomeFill />
                <p>Home</p>
              </li>
            </Link>

            <Link to={"/shows"}>
              <li>
                <PiTelevisionSimple />
                <p>TV</p>
              </li>
            </Link>

            <Link to={"/movies"}>
              <li>
                <MdOutlineLocalMovies />
                <p>Movies</p>
              </li>
            </Link>
            <Link to={"/sports"}>
              <li>
                <MdOutlineSportsBaseball />
                <p>Sports</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
