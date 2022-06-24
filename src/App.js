import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import CardDetail from "./components/CardDetail";
import NavBar from "./Layout/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/post/:id" element={<CardDetail />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
