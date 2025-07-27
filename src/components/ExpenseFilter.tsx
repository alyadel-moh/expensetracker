import React from "react";
import categories from "./Category";

interface props {
  onselectcategory: (category: string) => void;
}
const ExpenseFilter = ({ onselectcategory }: props) => {
  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => onselectcategory(event.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
