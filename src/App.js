import { useState } from 'react';
import './App.css';


function App() {

  const [count, setCount]=useState(0)

    const increment = ()=>
    {
        setCount(count+1);
        console.log(count)
    } 


    const decrement = ()=>
    {
        setCount(count-1);
        console.log(count)
    } 

  return (
    <div className="App">
      <div class="container">
        <button onClick={increment}>Increment</button>
        <h1>{count}</h1>
        <button onClick={decrement}>Decrementr</button>
      </div>
    </div>
  );
}

export default App;
