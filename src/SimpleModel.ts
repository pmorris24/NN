import { createAttribute, createDimension } from '@sisense/sdk-data';

// 1. IMPORTANT: Double-check that this is the EXACT name of your data source in Sisense.
export const DataSource = 'NN Dev';

// 2. We are only defining the 'site' table for this test.
export const Site = createDimension({
  name: 'site',
  dataSource: DataSource,
  attributes: {
    // 3. And only the 'lat' and 'lon' columns.
    Lat: createAttribute({
      name: 'lat',
      type: 'numeric-attribute',
      expression: '[site.lat]', // The expression is crucial for the SDK
    }),
    Lon: createAttribute({
      name: 'lon',
      type: 'numeric-attribute',
      expression: '[site.lon]', // The expression is crucial for the SDK
    }),
  },
});
