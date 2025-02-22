import React, { useEffect } from "react";

const SafeMap = () => {
  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 40.7128, lng: -74.006 }, // Default to NYC
      zoom: 12,
    });

    new window.google.maps.Marker({
      position: { lat: 40.7128, lng: -74.006 }, // Example shelter location
      map: map,
      title: "Safe Shelter",
    });
  }, []);

  return (
    <div className="h-screen">
      <h1 className="text-xl font-bold p-4">Find Safe Places</h1>
      <div id="map" className="h-full w-full"></div>
    </div>
  );
};

export default SafeMap;
