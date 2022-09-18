import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpenseChart from './Expenses/ExpenseChart';
import ExpensesFilter from './NewExpense/ExpensesFilter';
//import './expensesItem.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <h3  style={{color: "#fff"}}>No expenses found.</h3>;
  
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem key={expense.id} title={expense.title}  price={expense.price} date={expense.date} />
    ));
  }

  return (
    <div className='expenses'>
      {/* <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}  />
      {expensesContent}
      <ExpenseChart expense={filteredExpenses} /> */}

      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseChart expense={filteredExpenses} />
        {expensesContent}
    </div>
  );
};

export default Expenses;