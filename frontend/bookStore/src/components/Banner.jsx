import React from "react";
import book from "../assets/book-new.png";

const Banner = () => {
  return (
    <div className="px-2 lg:px-0 flex flex-col-reverse md:flex-row md:mt-16 mt-12">
      <div className="md:w-1/2 w-full md:mt-24">
        {/* Heading */}
        <h1 className="md:text-4xl text-2xl font-semibold md:w-4/5">
          Hello, Welcome here to learn something{" "}
          <span className="text-pink-700">new everyday!!</span>
        </h1>

        {/* Para */}
        <p className="md:my-10 my-5 md:pr-5 md:text-[18px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta vel
          hic exercitationem provident? Obcaecati tenetur quidem, at dolor
          fugiat nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consectetur, quasi?
        </p>

        {/* Email */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <label className="md:w-3/5 flex items-center border-[2px] border-zinc-300 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="md:w-5 md:h-5 w-4 h-4 opacity-70 ml-3 mt-1"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="px-4 py-2 outline-none bg-white dark:bg-slate-900 dark:text-white"
              placeholder="username@gmail.com"
            />
          </label>
          <button className="bg-pink-700 hover:bg-pink-600 transition-all duration-150 text-white px-4 py-[7px] rounded-md text-lg md:ml-3 mt-5 md:mt-0">Subscribe</button>
        </div>
      </div>
      <div className="md:w-1/2 w-full md:-mt-10">
        <div>
          <img src={book} alt="book-image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
