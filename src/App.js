import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Thanks from "./pages/Thanks";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/thanks" element={<Thanks></Thanks>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
