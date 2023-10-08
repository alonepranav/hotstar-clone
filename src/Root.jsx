import React, { useEffect, useState } from "react";

import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import Layout from "./Layout.jsx";
import Explore from "./components/Explore.jsx";
import Shows from "./components/Shows.jsx";
import Movies from "./components/Movies.jsx";
import Sports from "./components/Sports.jsx";
import Latest from "./components/Latest.jsx";
import NewlyAdded from "./components/NewlyAdded.jsx";
import Top10 from "./components/Top10.jsx";
import Star_Plus_Shows from "./components/Star-Plus-Shows.jsx";
import Movies_Family from "./components/Movies-Family.jsx";
import Movies_Thriller from "./components/Movies-Thriller.jsx";
import Sports_Popular from "./components/Sports-Popular.jsx";

export default function Root() {
  const Loader = () => {
    return (
      <div className="h-screen w-screen flex justify-center items-center fixed top-0 left-0 z-50 bg-[#0b0b0b]">
        <div className="loader"></div>
      </div>
    );
  };

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <>
      {!loader || <Loader />}
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<App />} />
              <Route path="login" element={<Login />} />
              <Route path="explore" element={<Explore />} />
              <Route path="shows" element={<Shows />} />
              <Route path="movies" element={<Movies />} />
              <Route path="sports" element={<Sports />} />

              <Route path="latest-release" element={<Latest />} />
              <Route path="newly-added" element={<NewlyAdded />} />
              <Route path="top-10" element={<Top10 />} />
              <Route path="star-plus-shows" element={<Star_Plus_Shows />} />

              <Route path="movies-family" element={<Movies_Family />} />
              <Route path="movies-thriller" element={<Movies_Thriller />} />

              <Route path="sports-popular" element={<Sports_Popular />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}
