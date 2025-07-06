import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "10px" }}>
        <NavLink to="/" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>
          Home
        </NavLink>
        <NavLink to="/about" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>
          About
        </NavLink>
        <NavLink to="/contact" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>
          Contact
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;