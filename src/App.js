import "./App.css";
import MainRouter from "./MainRouter";
import Header from "../src/components/Header";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { RequestContextProvider } from "./services/RequestContext";

function App() {
  return (
    <RequestContextProvider baseURL={"http://localhost:4000/api/"}>
      <Router>
        <Header />
        <MainRouter />
      </Router>
    </RequestContextProvider>
  );
}
export default App;
