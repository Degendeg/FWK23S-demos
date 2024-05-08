import { useState, useEffect } from 'react'
import './App.css'

// Använder mig av JSONPlaceHolder öppna API för att testa GET, POST, PUT, DELETE etc
// https://jsonplaceholder.typicode.com/guide/

function App() {
  // State för mockData och testData för att hantera data från API
  const [mockData, setMockData] = useState(null)
  const [testData, setTestData] = useState(null)

  // Mock-data för POST-förfrågningar
  const mockPost = {
    title: 'JENSEN',
    body: 'Yrkeshögskola',
    userId: 1337,
  }

  // Funktion för att generera UUID för att ge unika nycklar till listelement
  const uuid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2)
  }

  // useEffect-hook för att hämta data från API när komponenten monteras
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((result) => setMockData(result))

    return () => {
      setMockData(null)
    }
  }, [])

  // Funktion för att göra en POST-förfrågan med promises
  const createPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(mockPost),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => setTestData(json))
  }

  // Funktion för att göra en POST-förfrågan med async/await och try/catch
  const createPostTryCatch = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(mockPost),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const json = await response.json();
      setTestData(json);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }

  return (
    <>
      {/* Rendering av mockData */}
      <div className="card">
        {mockData && Object.entries(mockData).map(([key, value]) => (
          <div key={uuid()}>
            <p key={uuid()}><strong>{key}</strong>: {" "}{value}</p>
          </div>
        ))}
      </div>

      {/* Rendering av testData */}
      {testData && <p>{testData.title}</p>}

      {/* Knapp för att göra POST-förfrågan med promises */}
      <button onClick={createPost}>POST promises</button>

      {/* Kommenterad knapp för att göra POST-förfrågan med async/await och try/catch */}
      {/* <button onClick={createPostTryCatch}>POST try/catch</button> */}
    </>
  )
}

export default App