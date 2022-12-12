import React, { useRef } from "react"
import "../styles/pomodoro.css";
import Timer from "./Timer";
import Task from "./taskComponents/Task"
function Pomodoro() {
    const mainPageRef=useRef<HTMLDivElement>(null)
    return (

        <div ref={mainPageRef} className="main-app-container">
            <header className="heading-container">
                <h1 className="pomodoro-heading"> Pomofocus</h1>
            </header>
            <Timer mainPageRef={mainPageRef}/>
            <Task />
        </div>
    );
}

export default Pomodoro;