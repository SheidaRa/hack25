import React from "react";

const ResourcesPage = () => {
  return (
    <div className="p-10 bg-[#7F74EA] text-[#eee] font-sans">
      <div className="text-center mb-10">
        <h2 className="text-4xl text-white">Resources</h2>
      </div>

      {/* Articles Section */}
      <div className="bg-[#C3BEF1] p-8 rounded-xl mb-10 shadow-lg">
        <h3 className="text-2xl text-center mb-5 text-white">Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <img
              src="/assets/images/products/Warningsigns.jpg"
              alt="Warning Signs of Abuse"
              className="w-[150px] h-[150px] object-cover rounded-lg mb-4 shadow-md mx-auto"
            />
            <p className="text-lg text-gray-800">Warning Signs of Abuse</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <img
              src="/assets/images/products/Healthyrelationships.jpg"
              alt="Healthy Relationships"
              className="w-[150px] h-[150px] object-cover rounded-lg mb-4 shadow-md mx-auto"
            />
            <p className="text-lg text-gray-800">Healthy Relationships</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <img
              src="/assets/images/products/safetyplan.jpg"
              alt="Create a Safety Plan"
              className="w-[150px] h-[150px] object-cover rounded-lg mb-4 shadow-md mx-auto"
            />
            <p className="text-lg text-gray-800">Create a Safety Plan</p>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-purple-700 text-white py-3 px-6 rounded-full transition-colors duration-300 hover:bg-purple-800">
            see all
          </button>
        </div>
      </div>

      {/* Local Resources Section (Aligned Left) */}
      <div className="bg-[#C3BEF1] p-8 rounded-xl mb-10 shadow-lg text-left">
        <h3 className="text-2xl mb-5 text-white">Local Resources</h3>
        <p className="mb-4">
          Get direct support from domestic violence service providers in your area.
        </p>
        <input
          type="text"
          placeholder="Enter zip code"
          className="p-3 my-5 w-[250px] border border-gray-400 rounded-full text-base bg-gray-700 text-[#eee] block"
        />
        <div className="flex flex-wrap gap-2 mb-5">
          <button className="bg-pink-500 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-gray-500">
            All
          </button>
          <button className="bg-pink-500 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-gray-500">
            Medical
          </button>
          <button className="bg-pink-500 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-gray-500">
            Crisis Support
          </button>
          <button className="bg-pink-500 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-gray-500">
            Mental Health/Counselling
          </button>
          <button className="bg-pink-500 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-gray-500">
            Legal Aid
          </button>
          <button className="bg-pink-500 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-gray-500">
            Financial Aid
          </button>
          <button className="bg-pink-500 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-gray-500">
            Sexual Assault
          </button>
          <button className="bg-pink-500 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-gray-500">
            Youth Services
          </button>
        </div>
        <button className="bg-purple-700 text-white py-3 px-6 rounded-full transition-colors duration-300 hover:bg-purple-800">
          search
        </button>
      </div>
    </div>
  );
};

export default ResourcesPage;
