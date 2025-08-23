// src/theme.ts
import Highcharts from 'highcharts';

export const getHighchartsThemeOptions = (
  theme: 'light' | 'dark' | undefined
): Highcharts.Options => {
  if (theme !== 'dark') {
    // Light Theme Options
    return {
      xAxis: {
        labels: { style: { color: '#333333' } },
        title: { style: { color: '#666666' } },
      },
      yAxis: {
        labels: { style: { color: '#333333' } },
        title: { style: { color: '#666666' } },
      },
      legend: {
        itemStyle: { color: '#333333' },
        itemHoverStyle: { color: '#000000' },
        itemHiddenStyle: { color: '#cccccc' },
      },
    };
  }

  // Dark Theme Options
  return {
    chart: {
      backgroundColor: 'transparent',
    },
    title: { style: { color: '#E0E0E3' } },
    subtitle: { style: { color: '#E0E0E3' } },
    xAxis: {
      gridLineColor: '#707073',
      labels: { style: { color: '#E0E0E3' } },
      lineColor: '#707073',
      tickColor: '#707073',
      title: { style: { color: '#E0E0E3' } },
    },
    yAxis: {
      gridLineColor: '#444446',
      labels: { style: { color: '#E0E0E3' } },
      lineColor: '#707073',
      tickColor: '#707073',
      title: { style: { color: '#E0E0E3' } },
    },
    legend: {
      itemStyle: { color: '#E0E0E3' },
      itemHoverStyle: { color: '#FFF' },
      itemHiddenStyle: { color: '#606063' },
    },
    navigator: {
      handles: {
        backgroundColor: '#666',
        borderColor: '#AAA',
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(255,255,255,0.1)',
      series: {
        color: '#7798BF',
        lineColor: '#A6C7ED',
      },
      xAxis: {
        gridLineColor: '#505053',
        labels: {
          style: {
            color: '#E0E0E3',
          },
        },
        lineColor: '#707073',
        tickColor: '#707073',
      },
    },
  };
};
