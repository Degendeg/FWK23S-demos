import React, { useState, useEffect, useLayoutEffect, useReducer, useCallback, useMemo, useRef } from 'react';
import Child from './Child';
import './App.css'

// Create a context
export const MyContext = React.createContext();

// Create a reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const App = () => {
  // useState hook
  const [count, setCount] = useState(0)
  const value = 'Hello from context'

  // useEffect hook
  useEffect(() => {
    console.log('useEffect - Component mounted')
    return () => {
      console.log('useEffect - Component unmounted')
    };
  }, []);

  // useLayoutEffect hook
  useLayoutEffect(() => {
    console.log('useLayoutEffect - Component rendered')
  });

  // useReducer hook
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  // useCallback hook
  const handleClick = useCallback(() => {
    console.log('handleClick - useCallback')
    setCount(count + 1)
  }, [count]);

  // useMemo hook
  const doubleCount = useMemo(() => {
    console.log('useMemo - doubleCount')
    return count * 2
  }, [count]);

  // useRef hook
  const inputRef = useRef()

  return (
    <div>
      <h1>React Hooks Demo</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <hr />
      <MyContext.Provider value={value}>
        <Child />
      </MyContext.Provider>
      <hr />
      <p>Reducer count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <hr />
      <p>Double count (memoized): {doubleCount}</p>
      <hr />
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
};

export default App