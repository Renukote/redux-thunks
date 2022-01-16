import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Registration } from "./components/Registration";
import { Login } from "./components/Login";
import { Search } from "./components/Search";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Search />}></Route>
      </Routes>
    </div>
  );
}

export default App;
