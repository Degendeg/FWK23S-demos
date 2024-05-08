import './App.css'
import React, { useState, useEffect } from 'react'
import buttonStyles from './Button.module.css'
// import './Button.css'
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
  //   },
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
      <button className={buttonStyles.button}>Bekräfta</button> {/* hämtar klassen button från buttonStyles som är ett objekt skapat av importen jag gör på CSS modulen */}
      <button className="button">Bekräfta</button> {/* applicerar klassen button från den stylesheet du importerar, i detta fall Button.css - men skulle klassen finnas i flera stylesheet(s) och du importerar dem så kommer de att krocka */}
      <hr />
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
          /> {/* inline styling */}

          <img style={styles.img} key={idx} src={d} alt="" /> {/* style object(s) */}

          <StyledImg key={idx} src={d} alt="" /> {/* styled component, kräver att man installerar styled-components (npm i styled-components), se StyledImg för exempel och import högst upp */}

        </div>
      ))}
    </>
  )
}

export default App