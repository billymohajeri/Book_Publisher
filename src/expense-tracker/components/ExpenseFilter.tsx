import React from "react";

const ExpenseFilter = () => {
  return (
    <select className="form-select">
      <option value="">All Categories</option>
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
