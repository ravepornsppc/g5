import "../App.css"

const TodoApp = () => {
    return (
        <div className="todo">
            <h1>Todo app</h1>
            <input type="text" placeholder="please input here" id="text" />
            <button>add</button>
            <ul></ul>
        </div>

    )
}

export default TodoApp;