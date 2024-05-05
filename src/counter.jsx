import  { useState } from "react"

export default function Counter(){


    const [count, setCount] = useState(0)

    const handleAdd = () =>{
        const newCount = count + 1 ;
        setCount(newCount)
    }
    const handleAdd2 = () =>{
        const newdata = count - 1;
        setCount(newdata)
    }

    return(
        <div style={{border: '2px solid yellow', padding: '10px'}}>
            <h3>Counter : {count}</h3>
            <button style={{border: "1px solid red"}} onClick={handleAdd}>Add</button>
            <button style={{border: "1px solid red", marginLeft:"20px"}} onClick={handleAdd2}>Remove</button>
        </div>
    )
}