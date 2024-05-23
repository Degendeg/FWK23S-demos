import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // när komponenten initieras, hämta från vårat API och sätt datat om OK annars visa fel (CORS relaterat)
  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        if (error.message === 'Network Error') {
          setError('A network error occurred. This is often a CORS issue.');
        } else {
          setError(error.message);
        }
      });
  }, []);

  // visa relevant meddelande för användaren i syfte att förstå att det är CORS
  const displayErrorMessage = () => {
    if (error === 'A network error occurred. This is often a CORS issue.') {
      return "Access to the requested resource has been blocked by CORS policy. Please check the server's 'Access-Control-Allow-Origin' header.";
    }
    return error;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1><a href="https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/" target="_blank">CORS</a> Demo</h1>
        {data && <p>{data.message}</p>}
        {!data && !error && <p>Loading...</p>}
        {error && <p>{displayErrorMessage()}</p>}
      </header>
    </div>
  );
}

export default App;

