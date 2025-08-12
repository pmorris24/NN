// src/components/ConditionalColorFilterWidget.tsx
import React, { useState, useMemo } from 'react';
import { useExecuteQueryByWidgetId, type HighchartsOptions } from '@sisense/sdk-ui';
import { createMeasure } from '@sisense/sdk-data';
import * as DM from '../customer';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './ConditionalColorFilterWidget.css';

// Define the conditional coloring rules based on your Sisense editor screenshot.
// NOTE: The 'value' here is a placeholder. You may need to adjust these
// to match the exact values of your formulas (e.g., [Max leak_total_low]).
const THRESHOLDS = [
    { name: 'Super Emitter', color: '#F44336', value: 2000 },
    { name: 'High', color: '#8c4b00', value: 1000 },
    { name: 'Mid', color: '#ff6600', value: 500 },
    { name: 'Low', color: '#FFC107', value: 100 },
    { name: 'Minimal', color: '#4CAF50', value: 0 },
];

const ConditionalColorFilterWidget: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  const widgetOid = '6899fc27599a222821a0654a';
  const dashboardOid = '6899fc27599a222821a06546';

  const { data, isLoading, isError } = useExecuteQueryByWidgetId({
    widgetOid,
    dashboardOid,
  });

  const processedData = useMemo(() => {
    if (!data?.rows) return [];

    const allData = data.rows.map((row: any[]) => {
      const name = row?.[0]?.text ?? 'Unknown';
      const valueText = row?.[1]?.text ?? '0';
      const y = parseFloat(valueText.replace(/,/g, '')) || 0;
      
      let color = THRESHOLDS[THRESHOLDS.length - 1].color;
      for (const threshold of THRESHOLDS) {
        if (y >= threshold.value) {
          color = threshold.color;
          break;
        }
      }

      return { name, y, color };
    });

    if (activeFilter) {
      return allData.filter((d: { color: string; }) => d.color === activeFilter);
    }

    return allData;
  }, [data, activeFilter]);

  if (isLoading) return <div className="loading-state">Loading Chart...</div>;
  if (isError) return <div className="error-state">Error: Could not load widget data.</div>;

  const chartOptions: HighchartsOptions = {
    chart: { type: 'bar', backgroundColor: 'transparent' },
    title: { text: '' },
    xAxis: {
      categories: processedData.map((d: { name: string; }) => d.name),
      labels: { style: { color: 'var(--text-primary)' } }
    },
    yAxis: {
      title: { text: 'total of leak_rate', style: { color: 'var(--text-secondary)' } },
      labels: { style: { color: 'var(--text-primary)' } }
    },
    legend: { enabled: false },
    series: [{
      type: 'bar',
      name: 'Total Leak Rate',
      data: processedData,
    }],
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
          style: { color: 'var(--text-primary)', textOutline: 'none' }
        },
      },
    },
    credits: { enabled: false },
  };

  return (
    <div className="custom-barchart-widget">
      <div className="widget-header">
        <h3>Leak Rate by Site (Conditional)</h3>
      </div>
      <div className="color-filter-controls">
        <button
          className={`filter-button all ${activeFilter === null ? 'active' : ''}`}
          onClick={() => setActiveFilter(null)}
        >
          All
        </button>
        {THRESHOLDS.map(t => (
          <button
            key={t.name}
            className={`filter-button ${activeFilter === t.color ? 'active' : ''}`}
            style={{ backgroundColor: t.color }}
            onClick={() => setActiveFilter(t.color)}
          >
            {t.name}
          </button>
        ))}
      </div>
      <div className="chart-container">
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    </div>
  );
};

export default ConditionalColorFilterWidget;