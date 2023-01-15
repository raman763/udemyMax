import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  console.log(props);
  const expenseData = new Date(2021, 1, 20);
  const expenseTitle = "Car";
  const expeseAmount = "294.65";
  return (
    <div className="expense-item">
      <div className="date">{props.expense.date}</div>
      <div className="expense-item_description">
        <h2>{props.expense[0].title}</h2>
        <div className="expense-item__price">${props.expense[0].amount}7</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
