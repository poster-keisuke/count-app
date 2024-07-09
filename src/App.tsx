import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <p data-testid="counter">Count: {count}</p>
      <button data-testid="increase" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button data-testid="reset" onClick={() => setCount(1)}>
        Reset
      </button>
    </div>
  );
};

export default App;
