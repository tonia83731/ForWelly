import { useState } from "react";

import Counter from "./Counter";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleNumberClick = (e) => {
    // console.log(e.target.id);
    if (e.target.id === "plus") {
      setCount(count + 1);
    } else if (e.target.id === "minus") {
      if (count === 0) {
        alert('The number cannot below 0!')
        return
      }
      setCount(count - 1);
    }
  };
  const handleClearClick = () => {
    setCount(0);
  };

  return (
    <>
      <Counter
        onNumberClick={handleNumberClick}
        onClearClick={handleClearClick}
        count={count}
      />
    </>
  );
}

export default App;
