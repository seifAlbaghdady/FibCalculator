import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';
import './App.css';

function App() {
  return (
    <Router>
      <div className="calculator">
        <div className="app">
          <header className="app-header">
            <h1 className="app-title">Fib Calculator</h1>
            <nav className="app-nav">
              <Link to="/" className="app-link">Home</Link>
              <Link to="/otherpage" className="app-link">Other Page</Link>
            </nav>
          </header>
          <div className="app-content">
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
