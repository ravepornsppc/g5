import { Link } from "react-router-dom";
import "../App.css"
import Inputform from "./inputform";

const TodoApp = () => {
    return (
        <div className="todo">
            <h1>Todo app</h1>
            <Inputform />
           
            <ul></ul>
        </div>

    )
}

export default TodoApp;