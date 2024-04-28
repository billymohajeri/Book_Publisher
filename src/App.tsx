import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
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
      <ExpenseList />
    </div>
  );
}

export default App;
