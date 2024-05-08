import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // No dependency passed
  // useEffect(() => {
  //   //Runs on every render
  // });

  // componentDidMount
  // useEffect(() => {
  //   console.log("The useEffect ran, runs ONLY on first render");
  // }, []);

  // // componentDidUpdate
  // useEffect(() => {
  /*
    Runs on the first render and any time any dependency value changes
  */
  //   console.log("The useEffect ran");
  // }, [count, count2]);

  // componentWillUnmount
  // useEffect(() => {
  //   console.log("The use effect ran");
  //   return () => {
  //     console.log("The return is being ran");
  //   };
  // }, []);

  useEffect(() => {
    console.log(`The count has updated to ${count}`);
    return () => {
      console.log(`We are in the cleanup - the count is ${count}`);
    };
  }, [count]);

  useEffect(() => {
    console.log(`The count2 has updated to ${count2}`);
    return () => {
      console.log(`We are in the cleanup - the count is ${count2}`);
    };
  }, [count]);


  return (
    <div>
      <h6>Counter</h6>
      <p>Current count: {count} </p>
      <p>Count2 is: {count2} </p>
      <button onClick={() => setCount(count + 1)}>increment the count</button>
      {" "}
      <button onClick={() => setCount2(count2 + 1)}>increment count 2</button>
    </div>
  );
};

export default Counter;
