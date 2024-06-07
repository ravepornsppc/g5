import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./component/homePage";
import Navbar from "./component/navBar";
import TodoApp from "./component/todoApp";


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Navbar />,
    children: [

      {
        index: true,
        element: <HomePage />,
        errorElement: <h1>404 Not Found</h1>
      },
      {
        path: "/todo",
        element: <TodoApp />,
        errorElement: <h1>404 Not Found</h1>
      }
    ]
  }
])

export default App;
