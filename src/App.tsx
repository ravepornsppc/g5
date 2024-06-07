import TodoApp from "./component/todoApp";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./component/homePage";
import Navbar from "./component/navBar";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      {/* <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoApp />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
