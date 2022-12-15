import { useEffect, useState, } from "react";
import Pomodoro from "./components/Pomodoro";

function App() {
const [tick,setTick]=useState(0)
useEffect(()=>{
  setTimeout(()=>{
    setTick(x=>x+1)
  },1000)

},[])
  return (
   
   <Pomodoro/>
  );
}

export default App;
