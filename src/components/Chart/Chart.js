import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css';

export default function Chart(propDataPoint) {
  // const totalMaximum = Math.max(...dataPointValues);
  const dataPointValues = propDataPoint.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {propDataPoint.dataPoints.map(dataPoints => <ChartBar key={dataPoints.label} value={dataPoints.value} maxValue={totalMaximum} lable={dataPoints.lable} />)}
    </div>
  )
}
