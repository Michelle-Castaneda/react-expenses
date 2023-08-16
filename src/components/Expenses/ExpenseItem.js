import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


// a component in React is just a javascript function (speacial kind with html pieces)
function ExpenseItem(props) {
   const [title, setTitle] = useState(props.title);
   console.log('ExpenseItem evaluated by React')

    const clickHandler = () => {
        setTitle('Updated');
        console.log(title);
    };

    return (
    <Card className="expense-item">
       <ExpenseDate date={props.date} /> 
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler} >Change Title</button>
    </Card>
    );
}

//components are functions that return html code

//to use the component it needs to be exported
export default ExpenseItem;

//we can only have one root element per return statement

