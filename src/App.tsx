import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  let items = ["One", "Two", "Three", "Four", "Five"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Alert />
      <ListGroup
        heading="Numbers"
        items={items}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
