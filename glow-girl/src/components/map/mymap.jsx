import React, { useEffect, useRef } from 'react';

const NearbySheltersMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      const google = window.google;
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 40.7128, lng: -74.006 }, // Default to New York City
        zoom: 13,
      });

      const shelters = [
        { name: 'Shelter One', lat: 40.720, lng: -74.000 },
        { name: 'Shelter Two', lat: 40.730, lng: -74.010 },
        { name: 'Shelter Three', lat: 40.715, lng: -74.015 },
      ];

      shelters.forEach((shelter) => {
        new google.maps.Marker({
          position: { lat: shelter.lat, lng: shelter.lng },
          map,
          title: shelter.name,
        });
      });
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY`;
      script.async = true;
      script.onload = loadMap;
      document.head.appendChild(script);
    } else {
      loadMap();
    }
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <h1 className="text-2xl font-semibold text-center text-purple-700 p-4 bg-purple-100 shadow-md">
        Nearby Shelters
      </h1>
      <div ref={mapRef} className="flex-grow w-full"></div>
    </div>
  );
};

export default NearbySheltersMap;
