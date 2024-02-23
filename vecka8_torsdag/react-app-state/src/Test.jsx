const Test = ({ clickHandler, name }) => {
  return (
    <>
      <hr />
      <div>{name}</div>
      <button onClick={clickHandler}>click me to set yoshi</button>
    </>
  )
}
export default Test