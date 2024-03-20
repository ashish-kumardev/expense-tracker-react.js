import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import "./App.css";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [expenseData, setExpenseData] = useLocalStorage('expenseData', []);
  const [expense, setExpense] = useLocalStorage('expense',{
    title: "",
    category: "",
    amount: "",
  });
  const [editRowId, setEditRowId] = useLocalStorage('editRowId', null);
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenseData={setExpenseData}
          expense={expense}
          setExpense={setExpense}
          editRowId={editRowId}
          setEditRowId= {setEditRowId}
        />
        <ExpenseTable
          expenseData={expenseData}
          setExpenseData={setExpenseData}
          setExpense={setExpense}
          setEditRowId={setEditRowId}
        />
      </div>

    <footer>Made with 💖 by Ashish Kumar</footer>
    </main>
  );
}

export default App;
