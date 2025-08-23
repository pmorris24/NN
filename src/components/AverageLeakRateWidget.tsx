import React, { useState, forwardRef } from 'react';
import {
  ChartWidget,
  type BeforeRenderHandler,
  type HighchartsOptions,
  ChartType,
} from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data';
import Highcharts from 'highcharts';
import * as DM from '../customer';
import { useTheme } from '../ThemeService';
import { getHighchartsThemeOptions } from '../theme';
import type HighchartsReact from 'highcharts-react-official';
import './AverageLeakRateWidget.css';

interface AverageLeakRateWidgetProps {}

const CHART_TYPE_COLORS: Record<ChartType, string> = {
  line: '#007BFF',
  area: '#28A745',
  pie: '#FFC107',
  sunburst: '#DC3545',
};

const AverageLeakRateWidget: React.FC<AverageLeakRateWidgetProps> = forwardRef<
  HighchartsReact.RefObject,
  AverageLeakRateWidgetProps
>((props, ref) => {
  const { theme } = useTheme();
  const CHART_TYPES = ['line', 'area', 'pie', 'sunburst'] as ChartType[];
  const [selectedChartType, setSelectedChartType] = useState<ChartType>('area');

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
          const { points, point, key, x } = this;

          if (
            point &&
            (point.series.type === 'pie' || point.series.type === 'sunburst')
          ) {
            const value = Highcharts.numberFormat(
              point.y as number,
              2,
              '.',
              ','
            );
            const percentage =
              typeof point.percentage === 'number'
                ? ` (${point.percentage.toFixed(1)}%)`
                : '';
            return `<div style="padding: 8px 10px;">
                      <span style="background-color:${point.color}; border-radius: 3px; width:12px; height:12px; display:inline-block; margin-right:8px; vertical-align: middle;"></span>
                      <span style="vertical-align: middle;">${point.name}: <b>${value}</b>${percentage}</span>
                   </div>`;
          }

          if (points) {
            const header = Highcharts.dateFormat('%b %d, %Y', x as number);
            let body = `<div style="font-size: 14px; padding: 8px 10px 6px 10px;"><strong>${header}</strong></div><table style="width: 100%;">`;
            points.forEach((p) => {
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
          }

          return false;
        },
      },
    };

    if (options.chart) {
      options.chart.type = selectedChartType;
    }

    return Highcharts.merge(options, themeOptions, chartSpecificOptions);
  };

  return (
    <ChartWidget
      title={'Average Leak Rate per day'}
      dataSource={DM.DataSource}
      chartType={selectedChartType}
      dataOptions={{
        category: [
          {
            column: DM.leak_source_isolation.leak_start_datetime.Days,
            isColored: false,
            sortType: 'sortNone',
          },
        ],
        value: [
          {
            column: measureFactory.avg(
              DM.leak_source_isolation.leak_rate,
              'Average leak_rate'
            ),
            color: {
              type: 'uniform',
              color: theme === 'dark' ? '#FF5733' : '#3471AD',
            },
            sortType: 'sortNone',
          },
        ],
      }}
      styleOptions={{
        header: {
          titleTextColor: theme === 'dark' ? '#F9FAFB' : '#111827',
          backgroundColor: theme === 'dark' ? '#1F2937' : '#FFFFFF',
          dividerLineColor: theme === 'dark' ? '#374151' : '#E5E7EB',
        },
      }}
      onBeforeRender={handleBeforeRender}
      topSlot={
        <div className="chart-type-selector">
          {CHART_TYPES.map((chartType) => (
            <button
              key={chartType}
              className={`chart-type-button ${
                chartType === selectedChartType ? 'active' : ''
              }`}
              onClick={() => setSelectedChartType(chartType)}
              style={{ backgroundColor: CHART_TYPE_COLORS[chartType] }}
            >
              {chartType}
            </button>
          ))}
        </div>
      }
    />
  );
});

export default AverageLeakRateWidget;
