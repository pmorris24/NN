import React, { useState, useMemo, forwardRef } from 'react';
import { ChartWidget, type BeforeRenderHandler } from '@sisense/sdk-ui';
import {
  measureFactory,
  CalculatedMeasure,
  Attribute,
} from '@sisense/sdk-data';
import Highcharts from 'highcharts';
import * as DM from '../customer';
import './ConditionalColorFilterWidget.css';
import { useTheme } from '../ThemeService';
import { getHighchartsThemeOptions } from '../theme';
import type HighchartsReact from 'highcharts-react-official';

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
        ...options.yAxis[0],
        gridLineWidth: 0,
        offset: 10,
      },
    ],
    xAxis: [
      {
        ...options.xAxis[0],
        offset: 10,
      },
    ],
  };
  return newOptions;
}

const CustomBarChartWidget: React.FC = forwardRef<
  HighchartsReact.RefObject,
  {}
>((props, ref) => {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState<
    (typeof THRESHOLDS)[number] | null
  >(null);

  const conditionalMeasure: CalculatedMeasure = useMemo(() => {
    let name = '';
    let formula = '';
    const leakRateAttribute = DM.leak_source_isolation.leak_rate;
    const context = { totalOfLeakRate: leakRateAttribute };

    if (!activeFilter) {
      name = 'total of leak_rate';
      formula = 'SUM([totalOfLeakRate])';
    } else {
      name = activeFilter.name;
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
      formula = `CASE WHEN ${filterExpression} THEN SUM([totalOfLeakRate]) ELSE NULL END`;
    }

    return measureFactory.customFormula(name, formula, context);
  }, [activeFilter]);

  const handleBeforeRender: BeforeRenderHandler = (options) => {
    const themeOptions = getHighchartsThemeOptions(theme);
    const chartStyleOptions = modifyChartStyle(options);
    return Highcharts.merge(options, themeOptions, chartStyleOptions);
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
              sortType: 'sortNone',
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
              sortType: 'sortNone',
              numberFormatConfig: {
                decimalScale: 'auto',
                kilo: true,
                million: true,
                billion: true,
                trillion: true,
                thousandSeparator: true,
                prefix: false,
                symbol: undefined,
                name: 'Numbers',
              },
            },
          ],
          breakBy: [],
        }}
        filters={[]}
        styleOptions={{
          header: {
            backgroundColor: 'transparent',
            titleTextColor: theme === 'dark' ? '#F9FAFB' : '#111827',
          },
          legend: {
            enabled: true,
            position: 'bottom',
          },
          seriesLabels: {
            enabled: true,
            showValue: true,
            showPercentage: false,
          },
          xAxis: {
            enabled: true,
            labels: {
              enabled: true,
            },
            title: {
              enabled: false,
              text: 'name',
            },
            gridLines: true,
            isIntervalEnabled: false,
          },
          yAxis: {
            enabled: true,
            labels: {
              enabled: true,
            },
            title: {
              enabled: false,
              text: 'total of leak_rate',
            },
            gridLines: true,
            logarithmic: false,
            isIntervalEnabled: true,
          },
          y2Axis: {
            enabled: false,
            labels: {
              enabled: true,
            },
            title: {
              enabled: false,
            },
            gridLines: false,
            logarithmic: false,
            isIntervalEnabled: false,
          },
          dataLimits: {
            seriesCapacity: 50,
            categoriesCapacity: 100000,
          },
          navigator: {
            enabled: true,
          },
          subtype: 'bar/classic',
        }}
        drilldownOptions={{
          drilldownPaths: [],
          drilldownSelections: [],
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
});

export default CustomBarChartWidget;
