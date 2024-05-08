import { useContext } from "react"
import { MyContext } from './App'

const Child = () => {
  const value = useContext(MyContext)
  return (
    <div>Value from context: {value}</div>
  )
};
export default Child