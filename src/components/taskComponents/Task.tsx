import React, { useRef, useState } from "react"
import "../../styles/task.css";
function Task() {
    const [Alltask, setAllTask] = useState<Array<string>>([])
    const [newTask, setNewTask] = useState<string>("")
    const newTaskInputRef = useRef<HTMLInputElement>(null)
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setNewTask(e.currentTarget.value)
        console.log(Alltask)
    }
    const addNewTaskFunction = (): void => {
        if(newTask!=""){
            setAllTask(prevAlltask => [...prevAlltask, newTask])
        }
        
        if (newTaskInputRef.current) {
            newTaskInputRef.current.value = ""
        }
        setNewTask("")

    }
    const DeleteTask = (e: React.MouseEvent<HTMLButtonElement>): void => {
        setAllTask(Alltask.filter((task, id) => {
            return id.toString() != e.currentTarget.id
        }))
    }
    return (

        <div className="task-main-container">
            <p>Your Tasks:</p>
            
           
            {Alltask.map((value, id) => {
                return <>
                    <div className="added-task-container">
                        <p className="each-task-text">{value}</p> <button className="button-for-deleted-tasks"  onClick={DeleteTask} id={id.toString()} >X</button>
                    </div>
                </>
            })}
            
            <input className="newTaskInputRef" type="text" ref={newTaskInputRef} onChange={handleChange} placeholder="Your new task..." />
            <div className="line-below-input"> </div>
             <button className="button-for-adding-tasks" onClick={addNewTaskFunction}>Add new task</button>
        </div>
    );
}

export default Task;