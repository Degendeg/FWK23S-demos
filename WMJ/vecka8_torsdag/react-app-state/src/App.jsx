import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('mario') // hook börjar med prefix use<hook> tex useState, useEffect mm
  const [arr, setArr] = useState(['one', 'two', 'three']) // arr = getter, setArr = setter, state för array

  const clickHandler = () => {
    setName('luigi')
  }

  const doubleClickHandler = () => {
    // setArr(['zero', ...arr])
    // setArr([...arr, 'four'])
    /* 
      ovanstående fungerar inte eftersom setState körs asynkront
      och försöker re-rendera komponenten, detta gör att första
      överskrivs och sista setArr körs, se nedanstående för lösning:
    */
    setArr(prevArr => ['a half', ...prevArr, 'four']) // spreadar genom att kopiera befintligt array och lägger in både först & sist
  }

  return (
    <>
      <p>{name}</p>
      {JSON.stringify(arr)}
      <br /><br />
      {/* FEL! Detta invokar funktionen rakt av och körs då på component render. Se nedanstående exempel på lösning */}
      {/* <button onClick={setName('luigi')}>click me</button> */}

      {/* Här använder vi event onClick, sen deklararer vi en anonym funktion som invokas när eventet körs. */}
      {/* <button onClick={() => setName('luigi')}>click me</button> */}

      <button onClick={clickHandler} onDoubleClick={doubleClickHandler}>click me</button>
    </>
  )
}

export default App
