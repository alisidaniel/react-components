import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <Router>
      <Sidebar />
    </Router>
  );
}

export default App;
