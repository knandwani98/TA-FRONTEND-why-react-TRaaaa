let fruits = [
  { id: "apple", value: "🍎 apple" },
  { id: "orange", value: "🍊 orange" },
  { id: "grape", value: "🍇 grape" },
  { id: "pear", value: "🍐 pear" },
];

function handleClick(fruit) {
  alert(fruit);
}

function App() {
  return fruits.map((fruit) => {
    return (
      <button key={fruit.id} onClick={() => handleClick(fruit.value)}>
        {fruit.value}
      </button>
    );
  });
}

export default App;
