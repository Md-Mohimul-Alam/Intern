import React, { useEffect, useRef } from 'react';

// Load Apple MapKit script
const loadMapKitScript = (callback) => {
  const script = document.createElement('script');
  script.src = 'https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.core.js';
  script.crossOrigin = 'anonymous';
  script.onload = () => {
    if (callback) callback();
  };
  document.head.appendChild(script);
};

const MapComponent = ({ route }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initializeMap = async () => {
      if (!window.mapkit) return;

      const { Coordinate, CoordinateSpan, CoordinateRegion, Map } = window.mapkit;
      const center = new Coordinate(route.coordinates[0].lat, route.coordinates[0].lng);
      const span = new CoordinateSpan(0.02, 0.02); // Adjust span as needed
      const region = new CoordinateRegion(center, span);

      const map = new Map(mapRef.current, {
        region,
        colorScheme: Map.ColorSchemes.Adaptive,
      });

      route.coordinates.forEach(coord => {
        const annotation = new mapkit.MarkerAnnotation(new Coordinate(coord.lat, coord.lng));
        map.addAnnotation(annotation);
      });
    };

    loadMapKitScript(() => {
      initializeMap();
    });
  }, [route]);

  return <div ref={mapRef} style={{ width: '100vw', height: '100vh' }}></div>;
};

export default MapComponent;
