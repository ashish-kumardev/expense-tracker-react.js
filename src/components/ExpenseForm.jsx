import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";

export default function ExpenseForm({
  setExpenseData,
  expense,
  setExpense,
  editRowId,
  setEditRowId
}) {
  const [error, setError] = useState({});

  const validationConfig = {
    title: [
      {
        required: true,
        message: "Title should not be empty!",
      },
      {
        minLength: 3,
        message: "Title should not be less than 3!",
      },
    ],
    category: [
      {
        required: true,
        message: "Please Select an Category!",
      },
    ],
    amount: [
      {
        required: true,
        message: "Amount should not be empty!",
      },
      {
        onlyNumber: true,
        message: "Amount should be an number!",
      },
    ],
  };

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setExpense((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (formData) => {
    const errorObj = {};
    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorObj[key] = rule.message;
          return true;
        }

        if (value.length < rule.minLength) {
          errorObj[key] = rule.message;
          return true;
        }

        if (rule.onlyNumber && !/^[0-9]+$/.test(value)) {
          errorObj[key] = rule.message;
          return true;
        }
      });
    });

    setError(errorObj);
    return errorObj;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationResult = validateForm(expense);
    if (Object.values(validationResult).length) return;
    if (editRowId) {
      setExpenseData((prev) => {
        const updatedExpenses = prev.map((exp) => {
          if (exp.id === editRowId) {
            return {
              ...exp,
              title: expense.title,
              category: expense.category,
              amount: expense.amount,
            };
          }
          return exp;
        });
        return updatedExpenses;
      });

      setExpense({
        title: "",
        category: "",
        amount: "",
      });

      setEditRowId('')
      return;
    }
    setExpenseData((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        ...expense,
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
      <button className="add-btn">{editRowId ? "Save" : "Add"}</button>
    </form>
  );
}
