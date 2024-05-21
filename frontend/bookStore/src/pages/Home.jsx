import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import FreeBooks from "../components/FreeBooks";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-white text-zinc-800 dark:bg-slate-900 dark:text-white">
      <div className="w-11/12 mx-auto md:px-10">
        <Navbar />
      </div>
      <div className="w-11/12 mx-auto md:px-10">
        <Banner />
        <FreeBooks />
      </div>
      <hr className="h-[2px] bg-pink-700 dark:bg-slate-900 dark:text-white" />
      <div className="w-11/12 mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
