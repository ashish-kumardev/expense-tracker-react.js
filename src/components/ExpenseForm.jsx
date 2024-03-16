import React, { useEffect, useState } from "react";

export default function ExpenseForm({ setExpenseData }) {
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const data = {}
  //   for (const [key, value] of formData.entries()) {
  //     data[key] = value
  //   }

  //   setExpenseData(prev => [...prev, {
  //     ...data,
  //     id : crypto.randomUUID()
  //   }])
  // }

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

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          onChange={(e) =>
            setExpense((prev) => ({
              ...prev,
              title: e.target.value,
            }))
          }
          value={expense.title}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expense.category}
          onChange={(e) =>
            setExpense((prev) => ({
              ...prev,
              category: e.target.value,
            }))
          }
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
          onChange={(e) =>
            setExpense((prev) => ({
              ...prev,
              amount: e.target.value,
            }))
          }
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
