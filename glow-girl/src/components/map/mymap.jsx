import React from 'react';

const NearbySheltersMap = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <h1 className="text-3xl font-semibold text-center text-purple-700 p-4 bg-purple-100 shadow-md">
        Find Nearby Shelters
      </h1>
      <p className="text-center text-gray-600 mt-4 px-4">
        Use the map below to locate the nearest shelters and safe spaces in your area. Click on markers for details and directions.
      </p>
      
      <div className="flex-grow flex flex-col items-center justify-center bg-gray-100 p-6">
        <img
          src="https://s7ap1.scene7.com/is/image/hyundaimc/gme-uk-svc-detail-map-genesisStudioWestfield-11-23:S-16_9?ts=1703075174687&dpr=off"
          alt="Map Placeholder"
          className="rounded-lg shadow-xl w-full max-w-3xl"
        />
        
        <div className="mt-6 w-full max-w-3xl">
          <h2 className="text-xl font-semibold text-purple-600 mb-2">Shelter Information:</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Shelter One - 123 Main St. (Open 24/7)</li>
            <li>Shelter Two - 456 Elm St. (Open from 8 am to 10 pm)</li>
            <li>Shelter Three - 789 Oak St. (Open 24/7)</li>
          </ul>
        </div>

        <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg shadow-md transition duration-200">
          Get Directions
        </button>
      </div>

      <div className="text-center text-sm text-gray-500 mb-4">
        Actual interactive map coming soon!
      </div>
    </div>
  );
};

export default NearbySheltersMap;
