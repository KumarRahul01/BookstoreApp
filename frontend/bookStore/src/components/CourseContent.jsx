import React, { useEffect, useState } from "react";
import data from "../../public/list.json";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const CourseContent = () => {
  const navigate = useNavigate();
  const [increase, setIncrease] = useState(true);

  const sortingData = (a, b) => {
    if (increase) {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  };

  const paidCourse = data
    .filter((course) => course.category === "Paid")
    .sort(sortingData);
  // console.log(paidCourse);

  return (
    <div>
      {/* Text Data */}
      <div className="md:my-20 my-10 text-center">
        <h1 className="md:text-4xl text-2xl font-semibold">
          Explore Our Best Selling Courses{" "}
          <span className="text-pink-700">Here :)</span>
        </h1>
        <p className="my-5 md:mx-20 md:text-[18px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta vel
          hic exercitationem provident? Obcaecati tenetur quidem, at dolor
          fugiat nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consectetur, quasi? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptas doloremque eveniet totam ex culpa nihil libero alias
          animi quisquam voluptates.
        </p>
        <button
          className="bg-pink-700 hover:bg-pink-600 transition-all duration-150 text-white px-4 py-[7px] rounded-md text-lg md:ml-3 mt-5 md:mt-0"
          onClick={() => navigate("/")}
        >
          Home
        </button>
      </div>

      {/* Paid Courses */}
      <div>
        <h1 className="md:text-4xl text-2xl text-center font-semibold">
          Our <span className="text-pink-700">Courses</span>
        </h1>
      </div>

      {/* filter Method */}

      <div className="flex justify-end my-5">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-pink-700 hover:bg-pink-600 border-none text-white"
          >
            Sort Price
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-pink-700 hover:bg-pink-700 rounded-box w-52 text-white"
          >
            <li className="hover:bg-pink-600 rounded-lg font-semibold">
              <a onClick={() => setIncrease(true)}>Low to High</a>
            </li>
            <li className="hover:bg-pink-600 rounded-lg font-semibold">
              <a onClick={() => setIncrease(false)}>High to Low</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Course Data Mapping */}
      <div className="md:my-20 my-10">
        <div className="flex flex-col flex-wrap md:flex-row gap-5 mt-10 rounded">
          {paidCourse.map((paidCourse, index) => (
            <Card book={paidCourse} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
