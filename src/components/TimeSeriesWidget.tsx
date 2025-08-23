import { ChartWidget, type BeforeRenderHandler } from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data';
import Highcharts from 'highcharts';
import * as DM from '../customer'; // generated with @sisense/sdk-cli
import { useTheme } from '../ThemeService';
import { getHighchartsThemeOptions } from '../theme';

export default function TimeSeriesWidget() {
  const { theme } = useTheme();

  const handleBeforeRender: BeforeRenderHandler = (options) => {
    const themeOptions = getHighchartsThemeOptions(theme);
    const chartSpecificOptions: Highcharts.Options = {
      tooltip: {
        shared: true,
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
          const header = Highcharts.dateFormat('%b %d, %Y', this.x as number);
          let body = `<div style="font-size: 14px; padding: 8px 10px 6px 10px;"><strong>${header}</strong></div><table style="width: 100%;">`;
          this.points?.forEach((p) => {
            const value = Highcharts.numberFormat(p.y as number, 2, '.', ',');
            body += `<tr>
                      <td style="padding: 4px 10px; font-size: 13px;">
                        <span style="background-color:${p.series.color}; border-radius: 3px; width:12px; height:12px; display:inline-block; margin-right:8px; vertical-align: middle;"></span>
                        <span style="vertical-align: middle;">${p.series.name}</span>
                      </td>
                      <td style="text-align: right; padding: 4px 10px; font-size: 13px;">
                        <b>${value}</b>
                      </td>
                    </tr>`;
          });
          body += '</table>';
          return body;
        },
      },
      xAxis: {
        type: 'datetime', // Ensure Highcharts treats the axis as dates for formatting
      },
    };
    return Highcharts.merge(options, themeOptions, chartSpecificOptions);
  };

  return (
    <ChartWidget
      title={'Total Leak Rate over Time'}
      dataSource={DM.DataSource}
      chartType={'line'}
      // ... (rest of the component is unchanged)
      dataOptions={{
        category: [
          {
            column: DM.endpoint_data.datetime.Hours,
            isColored: false,
            sortType: 'sortNone',
          },
        ],
        value: [
          {
            column: measureFactory.sum(
              DM.leak_source_isolation.leak_rate,
              'Total leak_rate'
            ),
            color: {
              type: 'uniform',
              color: '#3471AD',
            },
            sortType: 'sortNone',
          },
        ],
        breakBy: [],
      }}
      filters={[]}
      styleOptions={{
        header: {
          backgroundColor: theme === 'dark' ? '#1F2937' : '#FFFFFF',
          titleTextColor: theme === 'dark' ? '#FFFFFF' : '#111827',
        },
      }}
      onBeforeRender={handleBeforeRender}
    />
  );
}
