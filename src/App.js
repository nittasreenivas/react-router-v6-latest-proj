import Navbar from "./components/Navbar";
import "./styles.css";
import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
}
