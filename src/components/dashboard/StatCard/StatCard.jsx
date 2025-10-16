"use client";

import React from 'react';
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import { FiInfo } from 'react-icons/fi';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Assuming shadcn/ui Card

// A simple custom tooltip for the chart
const ChartTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 text-sm shadow-sm">
        <p className="font-bold">{`${payload[0].value}`}</p>
        <p className="text-muted-foreground">{label || 'Data Point'}</p>
      </div>
    );
  }
  return null;
};

// Main StatCard Component
const StatCard = ({ title, value, chartType, chartData, tooltipText }) => {
  
  const renderChart = () => {
    if (!chartData) return null;

    const chartContainer = (chart) => (
      <div className="h-24 w-full"> {/* Increased height for better visibility */}
        <ResponsiveContainer>
          {chart}
        </ResponsiveContainer>
      </div>
    );
    
    // Choose chart based on prop
    const chartComponent = chartType === 'bar' 
      ? (
        <BarChart data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(128, 128, 128, 0.1)' }} />
          <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
        </BarChart>
      ) 
      : (
        <LineChart data={chartData} margin={{ top: 10, right: 5, left: 5, bottom: 0 }}>
          <Tooltip content={<ChartTooltip />} cursor={{ stroke: '#3B82F6', strokeWidth: 1, strokeDasharray: '3 3' }}/>
          <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} dot={false} />
        </LineChart>
      );
      
    return chartContainer(chartComponent);
  };

  return (
    // Added transition and hover effect classes
    <Card className="transition-transform duration-200 ease-in-out hover:-translate-y-1">
      {/* Changed p-6 to p-5 to slightly adjust left padding */}
      <CardHeader className="flex flex-row items-center justify-start gap-1.5 p-5 pb-2">
        <CardTitle className="text-sm font-medium text-slate-500">{title}</CardTitle>
        <div className="group relative">
            <FiInfo className="h-4 w-4 text-slate-400" />
            {/* Simple CSS-based tooltip for the info icon */}
            <span className="absolute bottom-full right-0 mb-2 w-48 rounded bg-slate-800 p-2 text-center text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                {tooltipText || "Information about this metric."}
            </span>
        </div>
      </CardHeader>
      {/* Changed p-6 to p-5 to match the header's padding */}
      <CardContent className="p-5 pt-0">
        <div className="text-4xl font-bold text-slate-900">{value}</div>
        {renderChart()}
      </CardContent>
    </Card>
  );
};

export default StatCard;