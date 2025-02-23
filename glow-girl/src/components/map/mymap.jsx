import React from 'react';

const NearbySheltersMap = () => {
  return (
    <div className="flex flex-col h-screen">
      <h1 className="text-2xl font-semibold text-center text-purple-700 p-4 bg-purple-100 shadow-md">
        Nearby Shelters
      </h1>
      <div className="flex-grow w-full flex items-center justify-center bg-gray-200">
        <p className="text-gray-500">Map Placeholder (Google Maps integration coming soon)</p>
      </div>
    </div>
  );
};

export default NearbySheltersMap;
