import React from "react";
import { useState } from "react";
import './ExpenseForm.css';
import './NewExpense.css'
const ExpenceForm = (props) => {
  const [enterTitle, setTitle] = useState('');
  const [enterAmount, setAmount] = useState('');
  const [enterDate, setDate] =useState('');
  
  //using one state insted of multiple states
  // const [userInput, setUserInput] = useState({
  //   enterTitle: '',
  //   enterAmount: '',
  //   enterDate: '',
  // });


  const changeTitleHandler = (e) =>{
    setTitle(e.target.value);
    //if you use single state instede of multiple state
    // setUserInput({
    //   ...userInput, //spread operater
    //   enterTitle: e.target.value,
    // });

    //set state based on previous state, it means update the input based on previous input
     // setUserInput((prevState) => {
    //   return { ...prevState, enterTitle: e.target.value };
    // });
  };

  const changeAmountHandler = (e) =>{
    setAmount(e.target.value);
  }

  const changeDateHandler  = (e) => {
    setDate(e.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };

    props.onSaveExpenseData(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  };


  return (
    <form  onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={changeTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enterAmount} onChange={changeAmountHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enterDate} onChange={changeDateHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenceForm;