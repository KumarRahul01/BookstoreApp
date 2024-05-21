import React from "react";
import Card from "./Card";
import list from "../../public/list.json";

const FreeBooks = () => {
  const books = list.filter((book) => book.price === 0);
  console.log(books);

  return (
    <div className="my-10 dark:bg-slate-900 dark:text-white">
      <h1 className="md:text-2xl text-xl px-3 md:px-0 font-bold">
        Free Courses Books
      </h1>
      <p className="md:text-[18px] px-3 md:px-0 mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        ratione vel omnis, aspernatur dolores quam?
      </p>

      {/* Rendeing Cards */}
      <div className="flex flex-col flex-wrap md:flex-row gap-5 mt-10 rounded ">
        {books.map((book, index) => (
          <Card key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default FreeBooks;
