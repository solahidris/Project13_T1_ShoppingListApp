import "./App.css";
import AppHeader from "./components/AppHeader";
import { useEffect, useState } from "react";

function App() {

  const [ counter, setCounter ] = useState(0);
  const [ productTotal, setProductTotal ] = useState(0);
  const [ productQuatity, setProductQuantity] = useState(0);

  const addProductHandler = () => {
    setCounter(counter + 1)
  }

  const productTotalHandler = () => {
    setProductTotal(parseInt(productTotal + 1))
    console.log(productTotal+1); // produce 1,2,3,4
    console.log(template);
  }

  const productUnitHandler = () => {
    setCounter(counter + 1)
  }
  
  const template = Array.from({ length: productTotal }).map((_, index) => (
    <div key={index.toString()} className="mt-5 mx-3 px-3 py-2 font-mono text-xs bg-yellow-300/80 rounded-lg">
      <h2>{index + 1}) Product Title</h2>
      <p>Product {index + 1} Description</p>
      <p>Product Price ${index * 100 + 50}</p>
      <p>Product Quantity = {index + 10}</p>
      <p className="font-bold">EDIT LATER - QUANTITY</p>
      <button onClick={productUnitHandler} className="my-1 ml-3 px-3 py-2 bg-zinc-500 rounded-lg font-bold font-mono text-xs">+</button>
      <button onClick={productUnitHandler} className="my-1 ml-3 px-3 py-2 bg-zinc-500 rounded-lg font-bold font-mono text-xs">-</button>
    </div>
  ));
  
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

        <div className="mt-5 mx-3 px-3 py-2 font-mono text-xs bg-zinc-400 rounded-lg">
          <p className="text-center pt-5 text-white text-xs font-mono">product quantity</p>
          <label className="font-bold">list item value = {isNaN(parseInt(productTotal)) ? 0 : parseInt(productTotal)}</label>
          <button onClick={productTotalHandler} className="mt-3 ml-3 px-3 py-2 bg-zinc-500 rounded-lg font-bold font-mono text-xs">+ product list item</button>
        </div>

        <div>{template}</div>

      </div>
    </div>
  );
}

export default App;
