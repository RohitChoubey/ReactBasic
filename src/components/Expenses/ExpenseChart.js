import React from 'react'
import Chart from '../Chart/Chart';

export default function ExpenseChart(prop) {
  const charDataPoints = [
    {lable : 'Jab', value : 0},
    {lable : 'Feb', value : 0},
    {lable : 'March', value : 0},
    {lable : 'Apr', value : 0},
    {lable : 'May', value : 0},
    {lable : 'June', value : 0},
    {lable : 'July', value : 0},
    {lable : 'Aug', value : 0},
    {lable : 'Sept', value : 0},
    {lable : 'Oct', value : 0},
    {lable : 'Nov', value : 0},
    {lable : 'Dec', value : 0},
  ];

  for(const expense of prop.expense) {
    const expenseMonth = expense.date.getMonth();
    charDataPoints[expenseMonth].value += expense.price;
  }

  return (
    <Chart dataPoints={charDataPoints} />
  )
}
