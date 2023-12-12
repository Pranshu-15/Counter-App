import { useState } from "react"

const Counter = () => {
    let [count, setCount] = useState(0);
    const countDecrease = () =>{setCount(--count)};
    const countIncrease = () =>{setCount(++count)};
    return(
        <div className="counter-container">
            <div className="header">
                <h1>Counter App</h1>
            </div>
            <div className="counter">
                <button onClick={countDecrease}>-</button>
                <h1>{count}</h1>
                <button onClick={countIncrease}>+</button>
            </div>
        </div>
    )
}
export default Counter;