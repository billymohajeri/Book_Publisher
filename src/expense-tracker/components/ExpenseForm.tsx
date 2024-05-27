import React from "react";

const ExpenseForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="form">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>
    </form>
  );
};

export default ExpenseForm;
