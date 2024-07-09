const App = () => {
  return (
    <div>
      <p>Count: 0</p>
      <button data-testid="increase" onClick={() => console.log("increase!")}>
        Increase
      </button>
      <button data-testid="reset" onClick={() => console.log("reset!")}>
        Reset
      </button>
    </div>
  );
};

export default App;
