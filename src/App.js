import "./App.css";
import AppHeader from "./components/AppHeader";
import { useState } from "react";

function App() {

  const [ counter, setCounter ] = useState(0);

  const addProductHandler = () => {
    setCounter(counter + 1)
  }

  return (
    <div className="bg-zinc-800 min-h-screen h-max pb-10">
      <AppHeader />

      <div className="bg-zinc-700 mx-10 py-5 h-screen rounded-lg">
        <p className="text-center text-white text-xs font-mono">apa benda ni</p>

        <ul className="mt-5 mx-3 px-3 py-2 font-mono text-xs bg-zinc-400 rounded-lg">
          <li>map this out</li>
          <li>this wont slide</li>
        </ul>

        <div className="mt-5 mx-3 px-3 py-2 font-mono text-xs bg-zinc-400 rounded-lg">
        <label className="font-bold">Counter Value = {counter}</label>
        <p>this will later be the</p>
        <p>(number of products instead)</p>
        <p>changed to other branch now</p>
        </div>

        <button onClick={addProductHandler} className="mt-3 ml-3 px-3 py-2 bg-zinc-400 rounded-lg font-bold font-mono text-xs">add product button</button>
      </div>
    </div>
  );
}

export default App;
