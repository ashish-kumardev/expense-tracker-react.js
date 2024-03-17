import React, { useEffect, useState } from "react";
import Input from "./Input";
import Select from "./Select";

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
      <Input
        label="Title"
        type="text"
        id="title"
        name="title"
        onChange={handleFormInput}
        value={expense.title}
        error={error.title}
      />
      <div className="input-container">
        <Select
          label="Category"
          id="category"
          optionList={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
          defaultValue="Select Category"
          hidden={true}
          name="category"
          value={expense.category}
          onChange={handleFormInput}
          error={error.category}
        />
      </div>
      <Input
        label="Amount"
        id="amount"
        name="amount"
        onChange={handleFormInput}
        value={expense.amount}
        error={error.amount}
      />
      <button className="add-btn">Add</button>
    </form>
  );
}
