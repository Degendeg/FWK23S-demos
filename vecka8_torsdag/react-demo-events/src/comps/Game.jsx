const Game = ({ game }) => {
  const clickHandler = () => {
    alert('hello')
  }
  return (
    <>
      <button onClick={() => alert('hello')}>Click</button>
      <pre>{JSON.stringify(game)}</pre>
    </>
  )
}
export default Game