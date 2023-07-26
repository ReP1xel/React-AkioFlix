import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Headers.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
      </div>
    </Router>
      
  );
}

export default App;
