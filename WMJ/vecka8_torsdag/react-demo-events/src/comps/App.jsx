import '../styles/App.css'
import Child from './Child';

function App() {
  const games = [
    { title: 'Super Mario 64', year: 1996, console: 'N64' },
    { title: 'The Legend of Zelda: Ocarina of Time', year: 1998, console: 'N64' },
    { title: 'GoldenEye 007', year: 1997, console: 'N64' },
    { title: 'Mario Kart 64', year: 1996, console: 'N64' },
    { title: 'Super Smash Bros.', year: 1999, console: 'N64' },
    { title: 'Banjo-Kazooie', year: 1998, console: 'N64' },
    { title: 'Pokémon Snap', year: 1999, console: 'N64' },
    { title: 'Star Fox 64', year: 1997, console: 'N64' },
    { title: 'The Legend of Zelda: Majoras Mask', year: 2000, console: 'N64' },
    { title: 'Diddy Kong Racing', year: 1997, console: 'N64' }
  ];

  return (
    <>
      <h1>Some games</h1>
      <Child games={games} />
    </>
  )
}

export default App
