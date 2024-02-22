import Game from "./Game"
import subChildStyles from '../styles/SubChild.module.css'

const SubChild = (props) => {
  const doubleClickHandler = (event) => {
    event.target.textContent = props.games[Math.floor(Math.random() * props.games.length)].title
  };
  return (
    <div>
      <h3>Eventually, have faith</h3>
      <button onClick={() => props.setData('subChild here!')}>Set data</button>
      <pre className={subChildStyles.pre} onDoubleClick={doubleClickHandler}></pre>
      <Game game={props.games[Math.floor(Math.random() * props.games.length)]} />
    </div>
  )
}
export default SubChild