import React from "react";
import Data from "../../data.json";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CategoryListItem from "../CategoryListItem/CategoryListItem";

function Categories() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#9b6dc1]">
      <div className="bg-[#cc99f5] rounded-[20px] shadow-lg w-[90%] max-w-[1200px] p-5 box-border">
        <Header />
        <div className="container mx-auto">
          <h1 className="text-center text-[#4A154B] text-4xl mb-5">
            Categories
          </h1>
          {Data.categories.map((category, i) => (
            <div key={i} className="text-center mt-5">
              <h2 className="text-2xl font-semibold">{category.title}</h2>
              <p className="mb-4">{category.summary}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.topics.map((topic, j) => (
                  <CategoryListItem key={j} topic={topic} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
