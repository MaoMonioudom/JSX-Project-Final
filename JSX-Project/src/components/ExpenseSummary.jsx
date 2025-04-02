export default function ExpenseSummary({ expenses }) {
  const totalExpense = expenses.reduce(
    (sum, exp) => sum + parseFloat(exp.amount),
    0
  );

  return <h3>Total Expenses: ${totalExpense.toFixed(2)}</h3>;
}
