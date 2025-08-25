import { ChartWidget, type BeforeRenderHandler } from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data';
import Highcharts from 'highcharts';
import * as DM from '../customer';
import { useTheme } from '../ThemeService';
import { getHighchartsThemeOptions } from '../theme';

export default function LeakDistributionPieChart() {
  const { theme } = useTheme();

  const handleBeforeRender: BeforeRenderHandler = (options) => {
    const themeOptions = getHighchartsThemeOptions(theme);
    const chartSpecificOptions: Highcharts.Options = {
      tooltip: {
        useHTML: true,
        shape: 'square',
        borderRadius: 6,
        borderWidth: 0,
        shadow: true,
        padding: 0,
        backgroundColor:
          theme === 'dark'
            ? 'rgba(31, 41, 55, 0.9)'
            : 'rgba(255, 255, 255, 0.95)',
        style: { color: theme === 'dark' ? '#F0F0F0' : '#1A2B3C' },
        formatter: function () {
          const point = this.point;
          const value = Highcharts.numberFormat(point.y as number, 2, '.', ',');
          const percentage =
            typeof point.percentage === 'number'
              ? ` (${point.percentage.toFixed(1)}%)`
              : '';

          return `<div style="padding: 8px 10px; font-size: 13px;">
                      <span style="background-color:${point.color}; border-radius: 3px; width:12px; height:12px; display:inline-block; margin-right:8px; vertical-align: middle;"></span>
                      <span style="vertical-align: middle;">${point.name}: <b>${value}</b>${percentage}</span>
                   </div>`;
        },
      },
    };
    return Highcharts.merge(options, themeOptions, chartSpecificOptions);
  };

  return (
    <ChartWidget
      title={'Leak Rate by Severity'}
      dataSource={DM.DataSource}
      chartType={'pie'}
      dataOptions={{
        category: [],
        value: [
          {
            column: measureFactory.sum(DM.site.leak_rate_low, 'Low'),
            color: { type: 'uniform', color: '#42BC39' },
          },
          {
            column: measureFactory.sum(DM.site.leak_rate_mid, 'Mid'),
            color: { type: 'uniform', color: '#ffff01' },
          },
          {
            column: measureFactory.sum(DM.site.leak_rate_high, 'High'),
            color: { type: 'uniform', color: '#ffab03' },
          },
          {
            column: measureFactory.sum(
              DM.site.leak_rate_superemitter,
              'Super Emitter'
            ),
            color: { type: 'uniform', color: '#ff0000' },
          },
        ],
      }}
      styleOptions={{
        header: {
          backgroundColor: theme === 'dark' ? '#1F2937' : '#FFFFFF',
          titleTextColor: theme === 'dark' ? '#FFFFFF' : '#111827',
        },
        subtype: 'pie/donut',
      }}
      onBeforeRender={handleBeforeRender}
    />
  );
}
