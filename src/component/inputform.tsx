import "../App.css"
import { ITaskList } from "../interface/task";
import TodoList from "./todoList";
import { useState } from "react";


const Inputform = () => {
    const [inputText, setInputText] = useState<string>("")
    const [todoList, setTodoList] = useState<ITaskList[]>([])
    const handleAddTodo = () => {
        setTodoList([...todoList, {
            input: inputText,
            id: Math.random(),
            completed: false
        }])
        setInputText("")
    }
    const updateCompleted = (iTaskList: ITaskList) => {
        todoList.map(task => {
            if (task.id == iTaskList.id) {
                task.completed = !task.completed
                setTodoList([...todoList])
            }
        })

    }
    return (
        <>
            <input type="text" placeholder="please input here" id="text" value={inputText} onChange={event => setInputText(event.target.value)} />
            <button onClick={handleAddTodo} >add</button>
            <TodoList input={todoList} updateCompleted={updateCompleted} />
        </>
    )
}

export default Inputform;