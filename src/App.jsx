import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import "./App.css";
import { useState } from "react";
import ExpenseData from "../ExpenseData";

function App() {
  const [expenseData, setExpenseData] = useState(ExpenseData);
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [editRowId, setEditRowId] = useState(null);
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenseData={setExpenseData}
          expense={expense}
          setExpense={setExpense}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          editRowId={editRowId}
        />
        <ExpenseTable
          expenseData={expenseData}
          setExpenseData={setExpenseData}
          setExpense={setExpense}
          setIsEdit={setIsEdit}
          setEditRowId={setEditRowId}
        />
      </div>
    </main>
  );
}

export default App;
