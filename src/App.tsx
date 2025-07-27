import { useState } from "react";
import "./App.css";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseList from "./components/ExpenseList";
import ExpenseFrom from "./components/ExpenseForm";
//export const categories = ["Groceries", "Utilities", "Entertainment"] as const; // to prevent dupliates as const to export it to form in enum
function App() {
  const [expenses, setexpenses] = useState([
    { id: 1, description: "milk", amount: 20, category: "Groceries" },
    { id: 2, description: "Trashbags", amount: 10, category: "Utilities" },
    {
      id: 3,
      description: "playingcards",
      amount: 15,
      category: "Entertainment",
    },
  ]);
  const [selectedCategory, setSelectedcategory] = useState("");
  // mb-3 margin bottom three
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses; // no usestate as we can calculate this from 0 variable
  return (
    // inside {new expense} is new added object spread object then add id prop
    <div>
      <div className="mb-5">
        <ExpenseFrom
          onSubmit={(newexpense) =>
            setexpenses([
              ...expenses,
              { ...newexpense, id: expenses.length + 1 },
            ])
          }
        />
      </div>
      <div className="mb-5">
        <ExpenseFilter
          onselectcategory={(category) => setSelectedcategory(category)}
        ></ExpenseFilter>
      </div>
      <ExpenseList
        expenses={visibleExpenses} //ye7ot category el 3mltlha select
        ondelete={(id) => setexpenses(expenses.filter((e) => e.id != id))}
      />
    </div>
  );
}
export default App;
