import "../App.css"
import Inputform from "./inputform";

const TodoApp = () => {
    return (
        <div id ="TodoContainer">
            <h1>Todo app</h1>
            <div className="todoInput">
            <Inputform />
            </div>
           
            <ul></ul>
        </div>

    )
}

export default TodoApp;