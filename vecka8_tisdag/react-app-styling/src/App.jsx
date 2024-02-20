import './App.css'
import React, { useState, useEffect } from 'react'
import styles from './Button.module.css'
// import styled from 'styled-components';

function App() {
  const [dogs, setDogs] = useState([]);
  const getDogs = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogs(dogs => [...dogs, data.message]));
  };
  useEffect(() => {
    for (let i = 0; i < 21; i++) {
      getDogs();
    }
    return () => {
      setDogs([]);
    }
  }, []);

  // const styles = {
  //   img: {
  //     width: '400px',
  //     height: '400px',
  //     objectFit: 'cover',
  //     borderRadius: '5px',
  //     float: 'left',
  //     margin: '10px',
  //   }
  // }

  // const StyledImg = styled.img`
  //   width: 400px;
  //   height: 400px;
  //   object-fit: cover;
  //   border-radius: 5px;
  //   float: left;
  //   margin: 10px;
  // `;

  return (
    <>
      <button className={styles.button}>Bekräfta</button>
      {dogs && dogs.map((d, idx) => (
        <div>
          <img
            style={{
              width: '400px',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '5px',
              float: 'left',
              margin: '10px',
            }}
            key={idx} src={d} alt=""
          />
          {/* <img style={styles.img} key={idx} src={d} alt="" /> */}
          {/* <StyledImg key={idx} src={d} alt="" /> */}
        </div>
      ))}
    </>
  )
}

export default App
