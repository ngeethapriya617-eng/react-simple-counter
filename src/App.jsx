import { useState } from 'react'; // 1. Import the necessary Hook
import './App.css'; // Keep the existing styling

function App() {
  
  // 2. State Definition:
  // 'count' is the current value (starts at 0). 
  // 'setCount' is the function used to update 'count'.
  const [count, setCount] = useState(0); 

  // 3. Function to increase the count
  const incrementCount = () => {
    setCount(count + 1); 
  };
  
  // 4. Function to decrease the count
  const decrementCount = () => {
    // Optional logic: prevent the count from going below zero
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // 5. The Component's UI (JSX)
  return (
    <div className="card">
      <h1>My First React Project: Counter</h1>
      
      <div className="counter-display">
        {/* Display the current state value */}
        Current Count: <h2>{count}</h2> 
      </div>

      <div className="buttons">
        {/* 6. Attach the functions to the button's onClick event */}
        <button onClick={decrementCount}>
          Decrement (-)
        </button>
        
        <button onClick={incrementCount}>
          Increment (+)
        </button>
      </div>

      <p className="read-the-docs">
        Click the buttons to change the number!
      </p>
    </div>
  );
}

export default App;