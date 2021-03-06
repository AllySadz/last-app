import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary.jsx";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://sharp-roentgen-fef16d.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Ally Sadzius {""}
            </a>{" "}
            and is {""}
            <a
              href="https://github.com/AllySadz/last-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
