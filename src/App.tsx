import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ["One", "Two", "Three", "Four", "Five"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button onClick={() => console.log("Button clicked!")}>Click me!</Button>
      <ListGroup
        heading="Numbers"
        items={items}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
