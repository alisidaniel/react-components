import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import SidebarNav from "./components/Sidebar"

function App() {
  return (
    <Router>
      <SidebarNav />
    </Router>
  );
}

export default App;
