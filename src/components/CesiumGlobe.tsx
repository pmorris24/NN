import React from 'react';
import { Viewer, Entity, PointGraphics } from 'resium';
import { Cartesian3, Color } from 'cesium';

// Interface for the data points to be rendered on the globe
interface GlobeDataPoint {
  lat: number;
  lon: number;
  leak_rate: number;
  leak_concentration: number;
}

// Interface for the component's props
interface CesiumGlobeProps {
  data: GlobeDataPoint[];
}

const CesiumGlobe: React.FC<CesiumGlobeProps> = ({ data }) => {
  // Function to determine the color of a point based on leak concentration
  const getColorByConcentration = (concentration: number): Color => {
    if (concentration > 1000000) return Color.fromCssColorString('#a74500');
    if (concentration > 800000) return Color.fromCssColorString('#cf5500');
    if (concentration > 600000) return Color.fromCssColorString('#f66500');
    if (concentration > 400000) return Color.fromCssColorString('#ff7312');
    if (concentration > 200000) return Color.fromCssColorString('#d6a500');
    if (concentration > 100000) return Color.fromCssColorString('#ffc400');
    if (concentration > 50000) return Color.fromCssColorString('#a74500');
    if (concentration > 10000) return Color.fromCssColorString('#379e30');
    return Color.fromCssColorString('#00cee6'); // Default color
  };

  return (
    <Viewer
      full
      style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {data.map((point, index) => (
        <Entity
          key={index}
          position={Cartesian3.fromDegrees(point.lon, point.lat, 0)}
          name={`Site ID: ${index + 1}`}
          description={`
            <div style="font-family: sans-serif; color: white; background-color: rgba(50, 50, 50, 0.8); padding: 10px; border-radius: 5px;">
              <h3>Site Information</h3>
              <p><strong>Latitude:</strong> ${point.lat.toFixed(6)}</p>
              <p><strong>Longitude:</strong> ${point.lon.toFixed(6)}</p>
              <p><strong>Total Leak Rate:</strong> ${point.leak_rate.toLocaleString()}</p>
              <p><strong>Total Leak Concentration:</strong> ${point.leak_concentration.toLocaleString()}</p>
            </div>
          `}
        >
          <PointGraphics
            pixelSize={Math.max(4, Math.min(24, point.leak_rate / 100000))}
            color={getColorByConcentration(point.leak_concentration)}
          />
        </Entity>
      ))}
    </Viewer>
  );
};

export default CesiumGlobe;
