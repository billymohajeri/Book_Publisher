import ListGroup from "./components/ListGroup";

function App() {
  let items = ["One", "Two", "Three", "Four", "Five"];
  return (
    <div>
      <ListGroup heading="Numbers" items={items} />
    </div>
  );
}

export default App;
