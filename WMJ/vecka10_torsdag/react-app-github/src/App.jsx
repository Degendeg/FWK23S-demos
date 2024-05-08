import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Child from './Child';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <Router>
      <div className="container">
        <h1>Demo</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/child">Child</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home count={count} increment={increment} decrement={decrement} />} />
          <Route path="/child" element={<Child count={count} />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = ({ count, increment, decrement }) => {
  return (
    <div className="content">
      <h2>Home Page</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;
