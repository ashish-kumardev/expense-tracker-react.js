import React, { useEffect, useState } from "react";

export default function ExpenseForm({ setExpenseData }) {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setExpenseData((prev) => [
      ...prev,
      {
        ...expense,
        id: crypto.randomUUID(),
      },
    ]);
  }

  function handleFormInput(e) {
    const { name, value } = e.target;
    setExpense((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          onChange={handleFormInput}
          value={expense.title}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expense.category}
          onChange={handleFormInput}
        >
          <option hidden>Select Category</option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={handleFormInput}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
