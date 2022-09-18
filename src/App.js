import './components/expenseItem.css';
import './components/NewExpense/NewExpense.css';
import NewExpence from './components/NewExpense/NewExpence';
import React, {useState} from 'react';
import  Expenses from './components/Expenses';


//function App() {
  const dummy_expense = [
    {
      id : '1',
      title : "Car Insurance",
      price : 5434.34,
      date : new Date(2022, 7,  14),
    },
    {
      id : '2',
      title : "Bike Insurance",
      price : 784.34,
      date : new Date(2021, 3,  26),
    },
    {
      id : '3',
      title : "Cycle Insurance",
      price : 7840.34,
      date : new Date(2020, 12,  24),
    },
    {
      id : '4',
      title : "MoterCycle Insurance",
      price : 7845.34,
      date : new Date(2019, 9,  22),
    }
  ];

  const App = () => {
    const [expenses, setExpenses] = useState(dummy_expense);
    const addExpenseHandler = (expense) => {
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
      });
    };

  return (
    <div>
      <NewExpence onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      
      {/* loop to show array data */}
      {/* {
        expense.map((expense)=><ExpenseItem title={expense.title} price={expense.price} date={expense.date} />
      )} */}
      {/* <ExpenseItem title={expense[0].title} price={expense[0].price} date={expense[0].date} />
      <ExpenseItem title={expense[1].title} price={expense[1].price} date={expense[1].date} />
      <ExpenseItem title={expense[2].title} price={expense[2].price} date={expense[2].date} />
      <ExpenseItem title={expense[3].title} price={expense[3].price} date={expense[3].date} /> */}
    </div>
   
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}
//};

export default App;
