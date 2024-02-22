import { useState, useRef } from 'react'
import SubChild from "./SubChild"
import childStyles from '../styles/Child.module.css'

function Child({ games }) {
  const [notification, setNotification] = useState('')
  const [data, setData] = useState(null)
  const searchInput = useRef()

  const clickHandler = () => {
    alert(JSON.stringify(games[Math.floor(Math.random() * games.length)]))
  }

  const notifyAboutInput = (event) => {
    setNotification('You have now typed: ' + event.target.value)
  }

  const convertToUpper = (event) => {
    event.target.value = event.target.value.toUpperCase()
  }

  const updateData = (newData) => {
    setData(newData)
  }

  return (
    <div>
      <h2>Yes yes, we will show you</h2>
      <button onClick={clickHandler}>Alert me a game</button>
      <br />
      <input
        type="text"
        className={childStyles.input}
        placeholder="Type something.."
        onInput={convertToUpper}
        onChange={notifyAboutInput}
      // ref={searchInput}
      />
      <br />
      <small>{notification}</small>
      <br />
      {data && <p>From child component: {data}</p>}
      <SubChild games={games} setData={updateData} />
    </div>
  )
}
export default Child