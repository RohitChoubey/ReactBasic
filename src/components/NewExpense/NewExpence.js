import React from "react";
import ExpenceForm from './ExpenceForm';
import './NewExpense.css';

const NewExpence = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
        };
       // console.log(enteredExpenseData);
        props.onAddExpense(expenseData);
      };

    return <div className="new-expense">
        <ExpenceForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
};
export default NewExpence;