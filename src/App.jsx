
import './App.css'
import Counter from './counter'
import Team from './Team'
import Use from './Use'
// import Friends from './friends'


function App() {

//normal function
  function handleClick(){
    alert('button clicked')
  }

//arrey Function
 const handleClick2 = () => {
    alert('button clicked')
  } 
//arrey Function props 
 const handleClick4 = (num) => {
    alert(num + 5)
  } 

  return (
    <>
      <h1>React Core Concept 2</h1>
      
      <button style={{border: "1px solid red", marginLeft:"20px"}} onClick={handleClick}>Click Me</button>
      <button style={{border: "1px solid red", marginLeft:"20px"}} onClick={handleClick2}>Click Me2</button>

      <button  style={{border: "1px solid red", marginLeft:"20px"}} onClick={()=>{alert('my name is ripon')}}>Click Me3</button>
       
       {/* button EventHandeler aer moddhe props pass  */}
      <button style={{border: "1px solid red", marginLeft:"20px"}} onClick={()=> handleClick4(3)}>Click Me4</button>

      {/* <Friends></Friends> */}
      <Use></Use>
      <Team></Team>
      <Counter></Counter>
    </>
  )
}

export default App
