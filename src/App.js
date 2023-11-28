import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/095/847/original/shecodes_logo.png?1693909358"
            className="App-logo img-fluid"
            alt="logo"
          />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>Coded by Vicki</small>
        </footer>
      </div>
    </div>
  );
}
