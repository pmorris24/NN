import React, { useState } from 'react';
import { ChartWidget, type BeforeRenderHandler, type HighchartsOptions, ChartType } from '@sisense/sdk-ui';
import { measureFactory } from '@sisense/sdk-data';
import Highcharts from 'highcharts';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import * as DM from '../customer';
import { useTheme } from '../ThemeService';
import { getHighchartsThemeOptions } from '../theme';

interface AverageLeakRateWidgetProps {
  // No custom props needed for this specific widget
}

const AverageLeakRateWidget: React.FC<AverageLeakRateWidgetProps> = () => {
  const { theme } = useTheme();
  const CHART_TYPES = [
    'line',
    'area',
    'pie',
    'sunburst'
  ] as ChartType[];
  const [selectedChartType, setSelectedChartType] = useState<ChartType>('area');

  const handleBeforeRender: BeforeRenderHandler = (options) => {
    const highchartsTheme = getHighchartsThemeOptions(theme);
    const mergedOptions: HighchartsOptions = Highcharts.merge(options, highchartsTheme);

    if (mergedOptions.chart) {
      mergedOptions.chart.type = selectedChartType;
    }

    if (mergedOptions.series && mergedOptions.series.length > 0) {
      mergedOptions.series.forEach((s: any) => {
        if (theme === 'dark') {
          s.color = '#FF5733';
          s.fillColor = '#FF5733'; 
        } else {
            s.color = '#3471AD'; 
            s.fillColor = '#3471AD';
        }
        if (selectedChartType === 'area') {
          s.lineWidth = 4;
          s.marker = { enabled: true, fillColor: 'white', radius: 4, lineWidth: 2, lineColor: s.color };
        } else if (selectedChartType === 'line') {
           s.lineWidth = 2;
           s.marker = { enabled: true, fillColor: 'white', radius: 4, lineWidth: 2, lineColor: s.color };
        } else {
            s.lineWidth = undefined;
            s.marker = { enabled: false };
        }

        s.dataLabels = {
            enabled: true,
            style: {
                color: 'var(--text-primary)',
                textOutline: 'none',
                fontSize: '10px'
            },
            format: '{y:.2f}'
        };
      });
    }
    
    if (mergedOptions.xAxis) {
      const xAxisArray = Array.isArray(mergedOptions.xAxis) ? mergedOptions.xAxis : [mergedOptions.xAxis];
      mergedOptions.xAxis = xAxisArray.map(axis => ({
        ...axis,
        type: 'datetime', // Explicitly set the axis type to handle dates
        labels: {
          ...axis.labels,
          rotation: -45,
          style: {
            textOverflow: 'none'
          },
          // Use Highcharts' built-in date formatting
          format: '{value:%m/%d/%y}',
        },
        title: {
          ...axis.title,
          text: 'Days in leak_start_datetime',
          enabled: true,
        },
        gridLineDashStyle: 'Solid',
        gridLineWidth: 1
      }));
    }
    
    if (mergedOptions.yAxis) {
      const yAxisArray = Array.isArray(mergedOptions.yAxis) ? mergedOptions.yAxis : [mergedOptions.yAxis];
      mergedOptions.yAxis = yAxisArray.map(axis => ({
        ...axis,
        title: {
          ...axis.title,
          text: 'Average leak_rate',
          enabled: true,
        },
        gridLineDashStyle: 'Solid',
        gridLineWidth: 1
      }));
    }

    mergedOptions.navigator = {
        enabled: true
    };
    
    return mergedOptions;
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
              color: '#3471AD',
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
          titleTextColor: theme === 'dark' ? '#F9FAFB' : '#111827',
          backgroundColor: theme === 'dark' ? '#1F2937' : '#FFFFFF',
          dividerLineColor: theme === 'dark' ? '#374151' : '#E5E7EB',
        },
        legend: {
          enabled: false,
        },
        markers: { enabled: false },
        lineWidth: { width: 'thick' },
        seriesLabels: { enabled: false },
        navigator: { enabled: true },
      }}
      onBeforeRender={handleBeforeRender}
      topSlot={
        <ButtonGroup variant="outlined" size="small" color="primary" sx={{ py: 1, px: 2, flexWrap: 'wrap' }}>
          {CHART_TYPES.map((chartType) => (
            <Button
              key={chartType}
              size={'small'}
              sx={{
                color: chartType === selectedChartType ? 'primary.main' : 'inherit',
                backgroundColor: chartType === selectedChartType ? 'rgba(25, 118, 210, 0.12)' : 'transparent',
                borderColor: 'primary.main',
              }}
              variant={chartType === selectedChartType ? 'contained' : 'outlined'}
              onClick={() => setSelectedChartType(chartType)}
            >
              {chartType}
            </Button>
          ))}
        </ButtonGroup>
      }
    />
  );
};

export default AverageLeakRateWidget;