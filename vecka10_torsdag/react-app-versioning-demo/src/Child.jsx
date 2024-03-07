const Child = ({ count }) => {
  return (
    <div className="content">
      <h2>Child Component</h2>
      <p>Count from Parent: {count}</p>
    </div>
  );
};

export default Child;
