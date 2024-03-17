import React, { useEffect, useState } from "react";

export default function ExpenseForm({ setExpenseData }) {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [error, setError] = useState({});

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setExpense((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errorObj = {};
    if (!expense.title) {
      errorObj.title = "Title should not be empty !";
    }
    if (!expense.category) {
      errorObj.category = "Please Select an Category !";
    }
    if (!expense.amount) {
      errorObj.amount = "Amount should not be empty !";
    }

    setError(errorObj);
    return errorObj;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = validateForm();
    console.log(obj);
    if (Object.values(obj).length) return;
    setExpenseData((prev) => [
      ...prev,
      {
        ...expense,
        id: crypto.randomUUID(),
      },
    ]);
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

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
        <p className="error">{error.title}</p>
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
        <p className="error">{error.category}</p>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={handleFormInput}
        />
        <p className="error">{error.amount}</p>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
