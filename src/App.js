import "./App.css";
import MainRouter from "./MainRouter";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "../src/components/Header";


function App() {
  return (
    <Router>
      <Header />
      <MainRouter />
    </Router>
  );
}
export default App;
