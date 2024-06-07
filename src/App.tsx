import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./component/homePage";
import Navbar from "./component/navBar";
import TodoApp from "./component/todoApp";


function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router}/>
    </>
  );
}

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <h1>404 Not Found</h1>
    },
    {
      path: "/todo",
      element: <TodoApp />,
      errorElement: <h1>404 Not Found</h1>
    }
])

export default App;
