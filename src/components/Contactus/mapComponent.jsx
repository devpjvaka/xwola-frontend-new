import React, { useState } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = "pk.eyJ1IjoicGp0ZWxlc29mdCIsImEiOiJjbHRqcW51bmIwcDRyMmpzNHB2Z2M1Nng3In0.ItTb9MvMgNzgmxHk74l3XA"; // Replace with your Mapbox token

const MapComponent = () => {
  const [viewport, setViewport] = useState({
    latitude: 17.3954,
    longitude: 78.3831,
    zoom: 10,
  });

  return (
    <div className="w-full h-[500px] sm:h-[600px] lg:h-[700px] relative ml-4 -translate-x-2 mt-4">
      <Map
        initialViewState={viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
        className="rounded-lg shadow-lg"
        onViewportChange={setViewport}
      >
        <NavigationControl position="top-left" />
        <Marker latitude={17.3954} longitude={78.3831}>
          <div className="p-1 bg-red-500 text-white rounded-full">📍</div>
        </Marker>
      </Map>
    </div>

  );
};

export default MapComponent;
