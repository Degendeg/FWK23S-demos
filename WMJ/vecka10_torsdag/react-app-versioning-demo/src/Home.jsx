const Home = ({ count, increment, decrement }) => {
  return (
    <div className="content">
      <h2>Home Page</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
export default Home