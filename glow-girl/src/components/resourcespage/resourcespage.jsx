// import React from 'react';
// import "./resourcespage.css";

// const ResourcesPage = () => {
//   return (
//     <div className="resources-page">
//       <div className="resources-header">
//         <h2>Resources</h2>
//       </div>

//       <div className="articles-section">
//         <h3>Articles</h3>
//         <div className="articles-container">
//           <div className="article">
//             <img src= "/warning_signs.jpg" alt="Warning Signs of Abuse" />
//             <p>Warning Signs of Abuse</p>
//           </div>
//           <div className="article">
//             <img src= "/healthy_relationships.jpg" alt="Healthy Relationships" />
//             <p>Healthy Relationships</p>
//           </div>
//           <div className="article">
//             <img src= "/safety_plan.jpg" alt="Create a Safety Plan" />
//             <p>Create a Safety Plan</p>
//           </div>
//           <button className="see-all-button">see all</button>
//         </div>
//       </div>

//       <div className="local-resources-section">
//         <h3>Local Resources</h3>
//         <p>Get direct support from domestic violence service providers in your area.</p>
//         <input type="text" placeholder="Enter zip code" className="zip-code-input" />

//         <div className="services-buttons">
//           <button>All</button>
//           <button>Shelter</button>
//           <button>Crisis Support</button>
//           <button>Mental Health/Counselling</button>
//           <button>Legal Aid</button>
//           <button>Financial Aid</button>
//           <button>Sexual Assault</button>
//           <button>Youth Services</button>
//         </div>

//         <button className="search-button">search</button>
//       </div>
//     </div>
//   );
// };

// export default ResourcesPage;

import React from 'react';

const ResourcesPage = () => {
  return (
    <div className="p-10 bg-[#7F74EA] text-[#eee] font-sans">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl text-white">Resources</h2>
      </div>

      {/* Articles Section */}
      <div className="bg-[#C3BEF1] p-8 rounded-[15px] mb-10 shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
        <h3 className="text-2xl mb-5 text-white">Articles</h3>
        {/* Using grid for a responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          <div className="text-center">
            <img
              className="w-[150px] h-[150px] object-cover rounded-[10px] mb-4 shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
              src="/warning_signs.jpg"
              alt="Warning Signs of Abuse"
            />
            <p className="text-lg">Warning Signs of Abuse</p>
          </div>
          <div className="text-center">
            <img
              className="w-[150px] h-[150px] object-cover rounded-[10px] mb-4 shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
              src="healthy_relationships.jpg"
              alt="Healthy Relationships"
            />
            <p className="text-lg">Healthy Relationships</p>
          </div>
          <div className="text-center">
            <img
              className="w-[150px] h-[150px] object-cover rounded-[10px] mb-4 shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
              src="/safety_plan.jpg"
              alt="Create a Safety Plan"
            />
            <p className="text-lg">Create a Safety Plan</p>
          </div>
        </div>
        <div className="mt-5 text-center">
          <button className="bg-purple-700 hover:bg-[#8e44ad] text-white px-6 py-3 rounded-full transition">
            see all
          </button>
        </div>
      </div>

      {/* Local Resources Section */}
      <div className="bg-[#C3BEF1] p-8 rounded-[15px] mb-10 shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
        <h3 className="text-2xl mb-5 text-white">Local Resources</h3>
        <p>Get direct support from domestic violence service providers in your area.</p>
        <input
          type="text"
          placeholder="Enter zip code"
          className="p-3 my-5 w-[250px] border border-[#888] rounded-full text-base bg-[#444] text-[#eee]"
        />
        <div className="flex flex-wrap gap-2.5 mb-5 justify-center md:justify-start">
          {[
            "All",
            "Shelter",
            "Crisis Support",
            "Mental Health/Counselling",
            "Legal Aid",
            "Financial Aid",
            "Sexual Assault",
            "Youth Services"
          ].map((label) => (
            <button
              key={label}
              className="bg-[#d97ce2] text-white py-2 px-5 rounded-full cursor-pointer text-sm transition hover:bg-[#999]"
            >
              {label}
            </button>
          ))}
        </div>
        <div className="text-center">
          <button className="bg-purple-700 hover:bg-[#8e44ad] text-white px-6 py-3 rounded-full transition">
            search
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
