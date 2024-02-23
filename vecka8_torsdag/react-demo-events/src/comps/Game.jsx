import { useState } from 'react'

const Game = ({ game }) => {
  const [data, setData] = useState(['abcde'])
  const addDataHandler = () => {
    // random str, 5 letters, ex: 'ftmlk'
    const randomItem = [...Array(5)].map(() => String.fromCharCode(97 + Math.floor(Math.random() * 26))).join('');
    setData([...data, randomItem])
  }
  return (
    <>
      <button onClick={addDataHandler}>addDataHandler</button>
      <pre>{JSON.stringify(game)}</pre>
      <pre>{JSON.stringify(data)}</pre>
    </>
  )
}
export default Game