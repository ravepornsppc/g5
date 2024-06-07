import { Route, Router, Routes } from "react-router-dom"
import HomePage from "./component/homePage"
import TodoApp from "./component/todoApp"

const RouterApp = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todo" element={<TodoApp />} />
        </Routes>
    )
}
export default RouterApp;
