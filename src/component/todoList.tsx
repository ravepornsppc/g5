
import "../App.css"
import { ITaskList } from "../interface/task"
interface IProps {
    input: ITaskList[]
    updateCompleted: (iTaskList: ITaskList) => void
}
const TodoList = (props: IProps) => {
    return (
        <>
            {props.input.map(list =>
                <li key={list.id}><input type="checkbox" onClick={() => props.updateCompleted(list)} />
                    {list.completed ? <del> {list.input}</del> : <span>{list.input}</span>}
                </li>
            )}
        </>
    )
}

export default TodoList;