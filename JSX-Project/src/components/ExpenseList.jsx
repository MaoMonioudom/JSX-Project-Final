export default function ExpenseList({
  expenses,
  filter,
  startDate,
  endDate,
  deleteExpense,
}) {
  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter((exp) => exp.category === filter);

  const filteredByDate = filteredExpenses.filter((exp) => {
    const expenseDate = new Date(exp.date);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;
    return (!start || expenseDate >= start) && (!end || expenseDate <= end);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredByDate.map((exp, index) => (
          <tr key={index}>
            <td>{exp.date}</td>
            <td>{exp.description}</td>
            <td>${exp.amount}</td>
            <td>{exp.category}</td>
            <td>
              <button onClick={() => deleteExpense(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
