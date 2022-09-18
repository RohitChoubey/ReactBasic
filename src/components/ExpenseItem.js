//import { useState } from "react";
//import React, {useState} from 'react'

export default function ExpenseItem(propData) {
    const month = propData.date.toLocaleString('en-Us', { month: 'long' });
    const day = propData.date.toLocaleString('en-Us', { day: '2-digit' });
    const year = propData.date.getFullYear();
 
    // const month =


    // const expenItem = "Car Insurance";
    // const expenPrice = 284;

   // const [title, setTitle] = useState(propData.title);
    
   // console.log(propData);
    // function ChangeTitle(e) {
    //     e.preventDefault();
    //     setTitle('Updatd Data')
    //     console.log('You clicked Update Data.');
    //   }

  return (
    <div className="expense-item">
        <div className='expense-date'>
            <div>{ day } </div>
            <div> { month }</div>
            <div> { year }</div>
        </div>
        {/* <div> {propData.date.toLoca}</div> */}
        <h2 className='expense-item'>{propData.title}</h2>
        
        <div className="expense-item__description">
            <div className="expense-item_price">
                ${propData.price}
            </div>
            {/* <div><button className="btn btn-info" onClick={ChangeTitle}>Change Title</button></div> */}
        </div>
    </div>
  )
}
