import logo from './logo.svg';
import './App.css';

function App() {
  const callServer = fetch('https://wiking7.herokuapp.com/api')
    .then(response => response.json())
    .then(data => {
      return data
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>

    </div>
  );
}

export default App;
