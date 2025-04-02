import { useState } from "react";

export default function ExpenseForm({ addExpense }) {
  const [newExpense, setNewExpense] = useState({
    amount: "",
    description: "",
    category: "",
    date: "",
  });

  const handleSubmit = () => {
    addExpense(newExpense);
    setNewExpense({ amount: "", description: "", category: "", date: "" });
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Amount"
        value={newExpense.amount}
        onChange={(e) =>
          setNewExpense({ ...newExpense, amount: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Description"
        value={newExpense.description}
        onChange={(e) =>
          setNewExpense({ ...newExpense, description: e.target.value })
        }
      />
      <input
        type="date"
        value={newExpense.date}
        onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
      />
      <select
        className="input"
        value={newExpense.category}
        onChange={(e) =>
          setNewExpense({ ...newExpense, category: e.target.value })
        }
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Health">Health</option>
        <option value="Others">Others</option>
      </select>
      <button className="add-btn" onClick={handleSubmit}>
        Add Expense
      </button>
    </div>
  );
}
