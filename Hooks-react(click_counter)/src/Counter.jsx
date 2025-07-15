import { useState } from "react";

function Counter (){
 const [count, setCount]= useState(0);

    function decreaseCount(){
        setCount(count-1);
    }
      function increaseCount(){
        setCount(count+1)
    }
      function resetCount(){
        setCount(0)
    }

 return (
    <>
    <h1>{count}</h1>
    <div className="buttonsDiv">
        <button className="button" onClick={decreaseCount}>Decrement</button>
        <button className="button" onClick={resetCount}> Reset</button>
        <button className="button" onClick={increaseCount}>Increment</button>
    </div>
    </>
 )

}

export default Counter;