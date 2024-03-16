import React from "react";

export default function ExpenseForm() {
  return (
    <form className="expense-form">
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" name="title"/>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" name="category">
          <option hidden>All</option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input id="amount" name="amount"/>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
