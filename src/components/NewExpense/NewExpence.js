import React from "react";
import ExpenceForm from './ExpenceForm';
import { useState } from "react";
import './NewExpense.css';

const NewExpence = (props) => {
  const [show, setShow] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setShow(false);
  };

  const stopEditingHandler = () => {
    setShow(false);
  };
  return <div className="new-expense">
    {/*  <ExpenceForm onSaveExpenseData={saveExpenseDataHandler} /> */}
    {!show && (
      <button onClick={()=>setShow(true)}>Add New Expense</button>
    )}
    {show && (
      <ExpenceForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
    )}
  </div>
};
export default NewExpence;