// @ts-ignore
import init, { greet } from "wasm";

import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + TypeScript + Rust/WebAssembly</h1>
      <div className="card">
        <button
          onClick={() => {
            init().then(() => {
              console.log("init wasm-pack");
              greet("from vite!");
            });
          }}
        >
          Click me
        </button>
      </div>
    </div>
  );
}

export default App;
