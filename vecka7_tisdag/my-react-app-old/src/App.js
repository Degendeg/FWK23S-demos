import './App.css';
import MyComp from './MyComp';

function App() {
  return (
    <div className="App">
      <p>Created with &nbsp;
        <a href="https://create-react-app.dev/docs/getting-started#quick-start" target="_blank" rel="noreferrer">
          <code>
            create-react-app
          </code>
        </a>
      </p>
      <h1>Hello World from App!</h1>
      <MyComp />
    </div >
  );
}

export default App;
