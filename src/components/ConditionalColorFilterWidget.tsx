import React, { useState, useMemo } from 'react';
import { ChartWidget, type BeforeRenderHandler } from '@sisense/sdk-ui';
import { measureFactory, CalculatedMeasure } from '@sisense/sdk-data';
import Highcharts from 'highcharts';
import * as DM from '../customer';
import './ConditionalColorFilterWidget.css';
import { useTheme } from '../ThemeService';
import { getHighchartsThemeOptions } from '../theme';

const THRESHOLDS = [
  { name: 'Super Emitter', color: '#FF3333', value: 2000, operator: '>' },
  { name: 'High', color: '#FF9800', value: 1000, operator: '>=' },
  { name: 'Mid', color: '#ff6600', value: 500, operator: '>=' },
  { name: 'Low', color: '#FFC107', value: 100, operator: '>=' },
  { name: 'Minimal', color: '#8BC34A', value: 0, operator: '>=' },
];

export function modifyChartStyle(options: any) {
  const newOptions = {
    plotOptions: {
      ...options.plotOptions,
      bar: {
        borderRadius: 10,
        borderWidth: 0,
        groupPadding: 0.1,
        pointPadding: 0.12,
      },
    },
    yAxis: [
      {
        ...(options.yAxis && options.yAxis[0]),
        gridLineWidth: 0,
        offset: 10,
      },
    ],
    xAxis: [
      {
        ...(options.xAxis && options.xAxis[0]),
        offset: 10,
      },
    ],
  };
  return newOptions;
}

const ConditionalColorFilterWidget: React.FC = () => {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState<
    (typeof THRESHOLDS)[number] | null
  >(null);

  const conditionalMeasure: CalculatedMeasure = useMemo(() => {
    let name = 'Total Leak Rate'; // Consistent base name for the tooltip
    const formula = 'SUM([totalOfLeakRate])';
    const context = { totalOfLeakRate: DM.leak_source_isolation.leak_rate };

    if (activeFilter) {
      let filterExpression = '';
      if (activeFilter.name === 'Minimal') {
        filterExpression = `SUM([totalOfLeakRate]) >= 0 AND SUM([totalOfLeakRate]) < 100`;
      } else if (activeFilter.operator === '>') {
        filterExpression = `SUM([totalOfLeakRate]) > ${activeFilter.value}`;
      } else {
        const thresholdIndex = THRESHOLDS.findIndex(
          (t) => t.name === activeFilter.name
        );
        const upperThreshold = THRESHOLDS[thresholdIndex - 1];
        if (upperThreshold) {
          filterExpression = `SUM([totalOfLeakRate]) >= ${activeFilter.value} AND SUM([totalOfLeakRate]) < ${upperThreshold.value}`;
        } else {
          filterExpression = `SUM([totalOfLeakRate]) >= ${activeFilter.value}`;
        }
      }
      // Use the filter name for the series when a filter is active
      return measureFactory.customFormula(
        activeFilter.name,
        `CASE WHEN ${filterExpression} THEN SUM([totalOfLeakRate]) ELSE NULL END`,
        context
      );
    }

    return measureFactory.customFormula(name, formula, context);
  }, [activeFilter]);

  const handleBeforeRender: BeforeRenderHandler = (options) => {
    const themeOptions = getHighchartsThemeOptions(theme);
    const chartStyleOptions = modifyChartStyle(options);
    const tooltipOptions: Highcharts.Options = {
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
          const value = Highcharts.numberFormat(point.y as number, 2, '.', ',');
          const header = `<div style="font-size: 14px; padding: 8px 10px 6px 10px;"><strong>${point.category}</strong></div>`;
          let body = `<table style="width: 100%;">`;
          body += `<tr>
                      <td style="padding: 4px 10px; font-size: 13px;">
                        <span style="background-color:${point.color}; border-radius: 3px; width:12px; height:12px; display:inline-block; margin-right:8px; vertical-align: middle;"></span>
                        <span style="vertical-align: middle;">${series.name}</span>
                      </td>
                      <td style="text-align: right; padding: 4px 10px; font-size: 13px;">
                        <b>${value}</b>
                      </td>
                    </tr>`;
          body += '</table>';
          return header + body;
        },
      },
    };
    return Highcharts.merge(
      options,
      themeOptions,
      chartStyleOptions,
      tooltipOptions
    );
  };

  return (
    <div className="custom-barchart-widget">
      <ChartWidget
        title={'Leak Rate by Site (Conditional)'}
        dataSource={DM.DataSource}
        chartType={'bar'}
        dataOptions={{
          category: [
            {
              column: DM.site.site_name,
            },
          ],
          value: [
            {
              column: conditionalMeasure,
              color: {
                type: 'conditional',
                conditions: [
                  { color: '#FF3333', expression: '2000', operator: '>' },
                  { color: '#FF9800', expression: '1000', operator: '>=' },
                  { color: '#ff6600', expression: '500', operator: '>=' },
                  { color: '#FFC107', expression: '100', operator: '>=' },
                  { color: '#8BC34A', expression: '0', operator: '>=' },
                ],
                defaultColor: '#8BC34A',
              },
            },
          ],
        }}
        styleOptions={{
          header: {
            backgroundColor: 'transparent',
            titleTextColor: theme === 'dark' ? '#F9FAFB' : '#111827',
          },
        }}
        onBeforeRender={handleBeforeRender}
      />
      <div className="color-filter-controls">
        <button
          className={`filter-button all ${
            activeFilter === null ? 'active' : ''
          }`}
          onClick={() => setActiveFilter(null)}
        >
          All
        </button>
        {THRESHOLDS.map((t) => (
          <button
            key={t.name}
            className={`filter-button ${
              activeFilter?.name === t.name ? 'active' : ''
            }`}
            style={{ backgroundColor: t.color }}
            onClick={() => setActiveFilter(t)}
          >
            {t.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ConditionalColorFilterWidget;
