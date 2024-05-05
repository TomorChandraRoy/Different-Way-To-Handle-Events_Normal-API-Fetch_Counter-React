import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(11);

    //internal css 
    const teamStyle={
        border: "2px solid blue",
        margin : '10px',
        padding : '10px',
        
    }
     
     const handleAdd = () =>{
        const newAdd = team + 1;
        setTeam(newAdd)
     }
     const handleAdd2 = () =>{
        const newRemove = team - 1;
        setTeam(newRemove)
     }
    return(
        <div style={teamStyle} >

            <h4 style={{color: "blue"}}> Team member incremetent and decrement </h4>
            <h3>Players : {team}</h3>

            {/* Event Handeler button */}
            <button style={{border: "1px solid red"}} onClick={handleAdd} >add</button>
            <button  style={{border: "1px solid blue", marginLeft:"20px"}} onClick={handleAdd2}>remove</button>
        </div>
    )
}
