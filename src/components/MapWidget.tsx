// src/components/MapWidget.tsx
import { useExecuteQuery } from '@sisense/sdk-ui';
import { measureFactory, filterFactory } from '@sisense/sdk-data';
import * as DM from '../customer';
import { Viewer, Entity, PointGraphics } from 'resium';
import { Cartesian3, Color, ArcGisMapServerImageryProvider } from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import './MapWidget.css';
import { useMemo, useEffect, useRef } from 'react';

// Helper function to determine bubble COLOR based on leak concentration
const getPointColor = (concentration: number) => {
  if (concentration > 5000000) return Color.RED.withAlpha(0.9);
  if (concentration > 1000000) return Color.ORANGE.withAlpha(0.9);
  if (concentration > 200000) return Color.YELLOW.withAlpha(0.9);
  return Color.LIMEGREEN.withAlpha(0.9);
};

// Helper function to determine bubble SIZE based on leak rate
const getPointSize = (leakRate: number) => {
  if (leakRate > 500000) return 35; // Super emitter
  if (leakRate > 200000) return 30; // Large
  if (leakRate > 50000) return 25; // Medium
  return 20; // Small
};

const MapWidget = () => {
  const queryProps = {
    dataSource: DM.DataSource,
    dimensions: [DM.site.site_name, DM.site.lat, DM.site.lon], // Added site_name for tooltip title
    measures: [
      measureFactory.sum(DM.leak_source_isolation.leak_rate, 'Total leak_rate'),
      measureFactory.sum(
        DM.endpoint_data.leak_concentration,
        'Total leak_concentration'
      ),
      measureFactory.countDistinct(DM.site.status, '# of unique status'),
    ],
    filters: [
      filterFactory.between(
        DM.endpoint_data.leak_concentration,
        14926.849999999999,
        10203093
      ),
    ],
    highlights: [],
  };

  const { data, isLoading, isError, error } = useExecuteQuery(queryProps);
  const viewerRef = useRef(null);

  const arcGisImageryProvider = useMemo(
    () =>
      new ArcGisMapServerImageryProvider({
        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
      }),
    []
  );

  useEffect(() => {
    return () => {
      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
        viewerRef.current.destroy();
      }
    };
  }, []);

  if (isLoading) {
    return <div>Loading Map Data...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  if (data) {
    return (
      <div className="map-widget-container">
        <Viewer
          ref={viewerRef}
          full
          imageryProvider={arcGisImageryProvider}
          baseLayerPicker={true}
          infoBox={true}
        >
          {data.rows.map((row, index) => {
            const siteName = row[0]?.text || 'N/A';
            const lat = typeof row[1]?.data === 'number' ? row[1].data : 0;
            const lon = typeof row[2]?.data === 'number' ? row[2].data : 0;
            const leakRate = typeof row[3]?.data === 'number' ? row[3].data : 0;
            const leakConcentration =
              typeof row[4]?.data === 'number' ? row[4].data : 0;
            const uniqueStatusCount = row[5]?.text || 'N/A';

            const pointColor = getPointColor(leakConcentration);
            const pixelSize = getPointSize(leakRate);

            // Create the multi-line description for the tooltip
            const description = `
              <div style="color: black;">
                <table>
                  <tbody>
                    <tr>
                      <td><span style="background-color: ${pointColor.toCssColorString()}; display: inline-block; width: 16px; height: 16px; border-radius: 3px;"></span></td>
                      <td>Total leak_concentration</td>
                      <td>${leakConcentration.toLocaleString(
                        undefined,
                        { maximumFractionDigits: 2 }
                      )}</td>
                    </tr>
                    <tr>
                      <td><span style="background-color: rgba(170, 170, 170, 0.9); display: inline-block; width: 16px; height: 16px; border-radius: 3px;"></span></td>
                      <td>Total leak_rate</td>
                      <td>${leakRate.toLocaleString(
                        undefined,
                        { maximumFractionDigits: 2 }
                      )}</td>
                    </tr>
                    <tr>
                      <td colspan="2"># of unique status</td>
                      <td>${uniqueStatusCount}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            `;

            return (
              <Entity
                key={index}
                name={siteName}
                position={Cartesian3.fromDegrees(lon, lat)}
                description={description}
              >
                <PointGraphics
                  pixelSize={pixelSize}
                  color={pointColor}
                  outlineColor={Color.BLACK.withAlpha(0.4)}
                  outlineWidth={2}
                />
              </Entity>
            );
          })}
        </Viewer>
      </div>
    );
  }

  return null;
};

export default MapWidget;

