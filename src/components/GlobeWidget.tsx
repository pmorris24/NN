import React from 'react';
import { useExecuteQuery } from '@sisense/sdk-ui';
import { measureFactory, filterFactory } from '@sisense/sdk-data';
import * as DM from '../customer';
import CesiumGlobe from './CesiumGlobe';

const GlobeWidget: React.FC = () => {
  const { data, isLoading, isError, error } = useExecuteQuery({
    dataSource: DM.DataSource,
    dimensions: [DM.site.lat, DM.site.lon],
    measures: [
      measureFactory.sum(DM.leak_source_isolation.leak_rate, 'Total leak_rate'),
      measureFactory.sum(
        DM.endpoint_data.leak_concentration,
        'Total leak_concentration'
      ),
    ],
    filters: [
      filterFactory.between(
        DM.endpoint_data.leak_concentration,
        14926.849999999999,
        10203093
      ),
    ],
  });

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <h2>Loading Globe Data...</h2>
      </div>
    );
  }

  if (isError || !data) {
    console.error('Error fetching globe data:', error);
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <h2>Error Loading Data.</h2>
        {error && (
          <pre style={{ color: 'red' }}>{JSON.stringify(error, null, 2)}</pre>
        )}
      </div>
    );
  }

  const globeData = data.rows.map((row) => ({
    lat: row[0].data as number,
    lon: row[1].data as number,
    leak_rate: row[2].data as number,
    leak_concentration: row[3].data as number,
  }));

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <CesiumGlobe data={globeData} />
    </div>
  );
};

export default GlobeWidget;
