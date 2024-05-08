const TodoList = ({ todos, completeTodoHandler }) => {
  return (
    <ul>
      {todos.map((todo, i) => (
        <>
          <li key={i}>
            <strong>Titel:</strong> {todo.title}
          </li>
          <li key={i}>
            <strong>UserId:</strong> {todo.userId}
          </li>
          <li key={i}>
            {todo.completed ? (
              <span style={{ color: 'green' }}>This is completed</span>
            ) : (
              <span style={{ color: 'red' }}>This is not completed</span>
            )}
            <br />
            {/* I event handlern så skapar vi en anonym funktion, för att hålla koden fri från funktioner utanför return statementet, som körs när användaren klickar på knappen */}
            {/* Den i sin tur tar emot completeTodoHandler funktionen från destructad props och bidrar med NUVARANDE todo's ID (i denna komponent loopar vi igenom arrayen av todos) */}
            <button onClick={() => completeTodoHandler(todo.id)}>Complete</button>
          </li>
          <hr />
        </>
      ))}
    </ul>
  )
}
export default TodoList