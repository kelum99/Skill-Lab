
import './App.css';

import './pages/Job Vacancy Management/New.css';
import MainRouter from './MainRouter';
import Header from '../src/components/Header'
import { Route, BrowserRouter as Router , Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    
    <Header/>
    
    <MainRouter/>

    </Router>
  );
}
export default App;
