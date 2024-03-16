import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import "./App.css";
import { useState } from "react";
import ExpenseData from '../ExpenseData'

function App() {
  const [expenseData, setExpenseData] = useState(ExpenseData)
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setExpenseData = {setExpenseData}/>
        <ExpenseTable expenseData = {expenseData}/>
        <div className="context-menu">
          <div>Edit</div>
          <div>Delete</div>
        </div>
      </div>
    </main>
  );
}

export default App;
