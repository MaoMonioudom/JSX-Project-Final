import { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseSummary from "./ExpenseSummary";

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(storedExpenses);
  }, []);

  useEffect(() => {
    if (expenses.length > 0) {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  }, [expenses]);

  const addExpense = (newExpense) => {
    if (
      !newExpense.amount ||
      !newExpense.description ||
      !newExpense.category ||
      !newExpense.date
    ) {
      return;
    }
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <div className="expense-tracker">
      <div className="left-main">
        <div className="total-container">
          <ExpenseSummary expenses={expenses} />
          <p id="account">
            <strong>Account:</strong> Oudom
          </p>
          <button onClick={() => setShowFilter(!showFilter)}>
            {showFilter ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        <ExpenseForm addExpense={addExpense} />
      </div>

      <div className="right-main">
        {showFilter && (
          <ExpenseFilter
            filter={filter}
            setFilter={setFilter}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            expenses={expenses}
          />
        )}
        <ExpenseList
          expenses={expenses}
          filter={filter}
          startDate={startDate}
          endDate={endDate}
          deleteExpense={deleteExpense}
        />
      </div>
    </div>
  );
}
