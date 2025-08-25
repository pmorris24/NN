// src/components/WidgetLibrary.tsx
import React from 'react';
import './WidgetLibrary.css';

const WIDGET_CATALOG: any[] = [
  {
    id: 'custom-barchart-widget',
    title: 'Leak Rate by Site (Conditional)',
    description:
      'A custom bar chart showing leak rate with interactive, color-coded filters.',
    defaultLayout: { w: 8, h: 10 },
  },
  {
    id: 'average-leak-rate-widget',
    title: 'Dynamic Average Leak Rate',
    description:
      'An area chart showing average leak rate over time with buttons to switch chart types.',
    defaultLayout: { w: 8, h: 10 },
  },
  {
    id: 'map-widget',
    title: 'Map Widget',
    description: 'A map widget that displays site data.',
    defaultLayout: { w: 8, h: 10 },
  },
  {
    id: 'leak-distribution-pie-chart',
    title: 'Leak Rate Distribution (Pie)',
    description:
      'A pie chart showing the distribution of different leak rate categories.',
    defaultLayout: { w: 6, h: 8 },
  },
  {
    id: 'scatter-plot-widget',
    title: 'Leak Rate + Wind Speed',
    description:
      'A scatter plot showing the relationship between leak rate and wind speed.',
    defaultLayout: { w: 8, h: 10 },
  },
  {
    id: 'time-series-widget',
    title: 'Total Leak Rate Over Time',
    description: 'A time series chart showing the total leak rate over time.',
    defaultLayout: { w: 8, h: 10 },
  },
];

interface WidgetLibraryProps {
  onAddWidget: (widget: any) => void;
}

const WidgetLibrary: React.FC<WidgetLibraryProps> = ({ onAddWidget }) => {
  return (
    <div className="widget-library">
      {WIDGET_CATALOG.map((widget) => (
        <div key={widget.id} className="widget-card">
          <h4>{widget.title}</h4>
          <p className="widget-description">{widget.description}</p>
          <button onClick={() => onAddWidget(widget)}>Add Widget</button>
        </div>
      ))}
    </div>
  );
};

export default WidgetLibrary;
