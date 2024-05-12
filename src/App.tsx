import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const expenses = [
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ];
  // let items = ["One", "Two", "Three", "Four", "Five"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  // const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {/* {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <span>World</span>
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Click me!</Button>
      <ListGroup
        heading="Numbers"
        items={items}
        onSelectItem={handleSelectItem}
      /> */}
      <ExpenseList expenses={} />
    </div>
  );
}

export default App;
