import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './TodoList'

function App() {
  // getter = todos, setter = setTodos, initieras som en tom array
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getData = () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((data) => {
          setTodos(data)
        })
    }

    // setTimeout för demo syfte så att vi kan använda ternary operatorn i vår return statement
    setTimeout(() => {
      getData()
    }, 3000)
  }, []) // Körs EN gång när komponenten renderas, tom dependency array

  // Denna funktion loopar igenom alla todos och matchar mot ett specifikt id
  // Här har vi en ternary operator också, så om id matchas så ska vi kopiera todo objektet men toggla completed, annars fallbacka på todo
  const completeTodoHandler = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    )
    // Här SETar vi statet för todos
    setTodos(updatedTodos);
  }

  return (
    <>
      {/* Om TODOs arrayen innehåller fler än noll element så ska komponenten TodoList visas, annars fallback text med att det inte är tillgängligt.. eftersom vi gör ett API anrop i vår useEffect hook */}
      {todos.length > 0 ? (
        <TodoList todos={todos} completeTodoHandler={completeTodoHandler} />
      ) : (
        <div>Todos are not available yet..</div>
      )}
    </>
  )
}

export default App
