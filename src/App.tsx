import ListGroup from "./components/ListGroup";

function App() {
  let items = ["One", "Two", "Three", "Four", "Five"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        heading="Numbers"
        items={items}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
