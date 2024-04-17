function ListGroup() {
  let items = ["One", "Two", "Three", "Four", "Five"];
//   items = [];
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item" onClick={()=>console.log(item,'Clicked!')}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
