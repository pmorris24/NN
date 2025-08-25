import { ChartWidget } from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data';
import * as DM from '../customer';
import { useTheme } from '../ThemeService';

export default function IndicatorCardWidget() {
  const { theme } = useTheme();

  return (
    <ChartWidget
      title="Max Leak Rate"
      dataSource={DM.DataSource}
      chartType={'indicator'}
      dataOptions={{
        value: [
          {
            column: measureFactory.max(
              DM.leak_source_isolation.leak_rate,
              'Max leak_rate'
            ),
          },
        ],
        secondary: {
          column: measureFactory.min(
            DM.leak_source_isolation.leak_rate,
            'Min leak_rate'
          ),
        },
      }}
      styleOptions={{
        header: {
          backgroundColor: theme === 'dark' ? '#1F2937' : '#FFFFFF',
          titleTextColor: theme === 'dark' ? '#FFFFFF' : '#111827',
        },
        indicator: {
          textColor: theme === 'dark' ? '#FFFFFF' : '#111827',
          title: {
            textColor: theme === 'dark' ? '#E0E0E3' : '#666666',
          },
          secondary: {
            textColor: theme === 'dark' ? '#E0E0E3' : '#666666',
          },
        },
        subtype: 'indicator/numeric',
      }}
    />
  );
}
