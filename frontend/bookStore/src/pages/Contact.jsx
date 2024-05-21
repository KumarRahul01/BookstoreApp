import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen w-full text-zinc-800 dark:bg-slate-900 dark:text-white">
      <div className="w-11/12 mx-auto md:px-10">
        <Navbar />
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
