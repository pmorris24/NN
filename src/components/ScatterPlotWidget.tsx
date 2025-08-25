import { ChartWidget, type BeforeRenderHandler } from '@sisense/sdk-ui';
import { measureFactory, filterFactory } from '@sisense/sdk-data';
import Highcharts from 'highcharts';
import * as DM from '../customer';
import { useTheme } from '../ThemeService';
import { getHighchartsThemeOptions } from '../theme';

export default function ScatterPlotWidget() {
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
          const series = this.series;
          const header = `<div style="font-size: 14px; padding: 8px 10px 6px 10px;"><span style="color:${point.color}; font-size: 16px;">●</span> <strong>${series.name}</strong></div>`;
          const xAxisLabel = series.xAxis.options.title?.text || 'X-Axis';
          const yAxisLabel = series.yAxis.options.title?.text || 'Y-Axis';

          let body = `<table style="width: 100%; border-spacing: 0;">`;
          if (point.name) {
            body += `<tr>
                                <td style="padding: 4px 10px; font-size: 13px;">AggHours</td>
                                <td style="text-align: right; padding: 4px 10px; font-size: 13px;"><b>${point.name}</b></td>
                             </tr>`;
          }
          body += `<tr>
                            <td style="padding: 4px 10px; font-size: 13px;">${xAxisLabel}</td>
                            <td style="text-align: right; padding: 4px 10px; font-size: 13px;"><b>${Highcharts.numberFormat(
                              point.x as number,
                              2,
                              '.',
                              ','
                            )}</b></td>
                          </tr>`;
          body += `<tr>
                            <td style="padding: 4px 10px; font-size: 13px;">${yAxisLabel}</td>
                            <td style="text-align: right; padding: 4px 10px; font-size: 13px;"><b>${Highcharts.numberFormat(
                              point.y as number,
                              2,
                              '.',
                              ','
                            )}</b></td>
                          </tr>`;
          body += '</table>';

          return header + body;
        },
      },
    };
    return Highcharts.merge(options, themeOptions, chartSpecificOptions);
  };

  return (
    <ChartWidget
      title={'Leak Rate + Wind Speed'}
      dataSource={DM.DataSource}
      chartType={'scatter'}
      dataOptions={{
        x: {
          column: measureFactory.sum(
            DM.lsi_wind_combined.leak_rate,
            'Total leak_rate'
          ),
        },
        y: {
          column: measureFactory.sum(
            DM.lsi_wind_combined.an_wind_speed,
            'Total an_wind_speed'
          ),
        },
        breakByPoint: {
          column: DM.lsi_wind_combined.leak_start_datetime.AggHours,
        },
        breakByColor: {
          column: DM.section.section_name,
        },
        size: {
          column: measureFactory.sum(
            DM.lsi_wind_combined.an_wind_speed,
            'Total an_wind_speed'
          ),
        },
      }}
      filters={[
        filterFactory.members(DM.section.section_name, [
          'As13sc_1',
          'Section_01',
          'Section_04',
          'Section_05',
          'Section_06',
          'Section_07',
        ]),
      ]}
      styleOptions={{
        header: {
          backgroundColor: theme === 'dark' ? '#1F2937' : '#FFFFFF',
          titleTextColor: theme === 'dark' ? '#FFFFFF' : '#111827',
        },
        yAxis: { title: { enabled: true, text: 'Total an_wind_speed' } },
        xAxis: { title: { enabled: true, text: 'Total leak_rate' } },
      }}
      onBeforeRender={handleBeforeRender}
    />
  );
}
