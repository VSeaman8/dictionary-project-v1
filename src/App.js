import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>What Word do you want to look up?</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <small>
            Coded by{" "}
            <a href="https://github.com/VSeaman8/dictionary-project-v1">
              Vicki
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
