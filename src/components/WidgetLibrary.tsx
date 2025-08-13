// src/components/WidgetLibrary.tsx
import React from 'react';
import './WidgetLibrary.css';

const WIDGET_CATALOG: any[] = [
  {
    id: 'custom-barchart-widget',
    title: 'Leak Rate by Site (Conditional)',
    description: 'A custom bar chart showing leak rate with interactive, color-coded filters.',
    defaultLayout: { w: 8, h: 10 },
  },
  {
    id: 'average-leak-rate-widget',
    title: 'Dynamic Average Leak Rate',
    description: 'An area chart showing average leak rate over time with buttons to switch chart types.',
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