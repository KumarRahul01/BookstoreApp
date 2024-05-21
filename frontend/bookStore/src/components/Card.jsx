import React from "react";

const Card = ({ book }) => {
  return (
    <>
      {/* cards */}

      <div
        className={`lg:max-w-[400px] md:max-w-[300px] dark:bg-slate-900 dark:text-white dark:border rounded-t-xl mb-5 overflow-hidden bg-slate-300 ${
          book.price === 0 ? "cursor-pointer" : ""
        } hover:-translate-y-5 hover:shadow-2xl transition-all duration-300`}
      >
        <img src={book.image} alt="image" />
        <div className="flex justify-between items-center">
          <h1 className="md:text-xl mt-3 px-3 font-bold">{book.title}</h1>
          <p className="md:text-lg mt-3 font-semibold px-3 py-0 bg-pink-700 rounded text-white mr-5">
            {book.category}
          </p>
        </div>
        <p className="px-3 my-3">{book.description.slice(0, 121) + "..."}</p>
        <div
          className={`pl-3 py-3 ${
            book.category === "Free"
              ? "hidden"
              : "flex justify-between items-center"
          }`}
        >
          <h1 className="md:text-xl mt-3 px-3 font-bold border-pink-700 border-2 rounded-lg">
            ${book.price}
          </h1>
          <p className="md:text-lg mt-3 font-semibold px-3 py-0 bg-pink-700 hover:bg-pink-600 transition-all duration-150 rounded text-white mr-5 cursor-pointer">
            Buy Now
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
