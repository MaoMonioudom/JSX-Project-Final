export default function ExpenseFilter({
  filter,
  setFilter,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  expenses,
}) {
  return (
    <div>
      <h3>Filter by Date</h3>
      <p>From date:</p>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <p>To date:</p>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />

      <h3>Filter by Category</h3>
      <select
        value={filter} // Ensure the selected value is reflected
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All</option>
        {Array.from(
          new Set(expenses.map((exp) => exp.category).filter(Boolean))
        ).map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
