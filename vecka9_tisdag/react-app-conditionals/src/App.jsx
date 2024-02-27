import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((data) => setData(data))
    }
    // setTimeout för demo syfte
    setTimeout(() => {
      getData()
    }, 2000)
  }, [])

  return (
    <>
      {/* Logical operator &&, i detta fall visas nedanstående ifall data är truthy annars visas "Data is not available yet.." */}
      {data && <div>{JSON.stringify(data[0])}</div>}
      {!data && <div>Data is not available yet..</div>}
      <br />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      {/* Ternary operator. condition ? true : false */}
      {/* I detta fall visas nedanstående ifall statet count är större än noll, annars visas en div som innehåller "Count is not bigger than 0" */}
      {count > 0 ?
        (
          <div>
            <div>
              <div>
                <a href="https://vitejs.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              </div>
              <h1>Vite + React</h1>
              <div className="card">
                <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
                </p>
              </div>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
            </div>
          </div>
        ) : (
          <div style={{ margin: '10px' }}>
            Count is not bigger than 0
          </div>
        )
      }
    </>
  )
}

export default App
