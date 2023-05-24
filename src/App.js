import "./App.css";
import AppHeader from "./components/AppHeader";
import { useEffect, useState } from "react";

function App() {

  // const [ productTotal, setProductTotal ] = useState([{}]);
  const [ productTotal, setProductTotal ] = useState([{},{},{},{},{}]);
  const [productUnits, setProductUnits] = useState([]);

  // Total Items: {totalProductItems}</label>
  const [totalProductItems, setTotalProductItems] = useState(0);
  
      
  const totalProductItemsHandler = () => {
    const values = productUnits
    const sum = values.slice(1).reduce((total, number) => total + number, 0);
    setTotalProductItems(sum);
    console.log(sum, 'sum');
  };

  const productTotalHandler = () => {
    setProductTotal(prevProductTotal => [...prevProductTotal, {}]);
  };

  const productUnitHandler = (index, action) => {
    setProductUnits(prevProductUnits => {
      const updatedProductUnits = [...prevProductUnits];
      if (action === "add") {
        updatedProductUnits[index] = updatedProductUnits[index] ? updatedProductUnits[index] + 1 : 1;
      } else if (action === "minus") {
        updatedProductUnits[index] = updatedProductUnits[index] ? updatedProductUnits[index] - 1 : 0;
      }
      return updatedProductUnits;
    });
    console.log(productUnits)
  };

  const template = productTotal.map((_, index) => (
    <div key={index.toString()} className="mt-5 mx-6 px-3 py-2 font-mono text-xs bg-gray-300 rounded-lg">
     
      {/* product number index */}
      <h2 className="bg-gray-400 py-1 px-1 w-fit text-gray-200 rounded ml-[-0.2rem]">#{index}</h2>
    
      {/* Product Title */}
      <input type="text" placeholder="Product Title" className="bg-gray-400/40 hover:bg-gray-400/50 active:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400 rounded-lg px-4 py-1 w-full mt-2"></input>
      
      {/* Product Description and Textarea */}
      <textarea
        placeholder="Enter a detailed description (between 10 and 50 words) that provides a comprehensive overview of the item or topic you're describing."
        className="mt-4 bg-gray-400/40 hover:bg-gray-400/50 active:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400 rounded-lg mt-1 w-full resize-y px-4 py-2"
        rows="5"
      ></textarea>

      {/* Product Price */}
      <label>Product Price $ </label>
      <input type="number" placeholder={index * 100 + 50} className="bg-gray-400/40 hover:bg-gray-400/50 active:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400 rounded-lg px-2 py-1 w-[5rem] mt-2"></input>

      {/* Quantity Text Box + - */}
      <div className="flex justify-end mt-10">
        <p className="mb-[0px] my-3 mr-3">Quantity</p>
        <label className="bg-gray-400 rounded-lg px-4 py-3">{productUnits[index] !== undefined ? productUnits[index] : 0}</label>
        <button value="add" onClick={() => productUnitHandler(index, "add")} className=" my-1 ml-3 px-3 py-2 bg-gray-500 rounded-lg font-bold font-mono text-xs">+</button>
        <button value="minus" onClick={() => productUnitHandler(index, "minus")} className="my-1 ml-3 px-3 py-2 bg-gray-500 rounded-lg font-bold font-mono text-xs">-</button>
      </div>

    </div>
  )).slice(1); // exclude the first element since 1st element has no key
  // console.log(template);
  
  useEffect(() => {
    totalProductItemsHandler();
    // eslint-disable-next-line
  }, [productUnits]);

  
  return (
    <div className="bg-zinc-900 min-h-screen h-max pb-20 overflow-auto">

      <AppHeader />

      <div className="bg-gray-700 mx-10 lg:mx-[30%] py-5 h-screen rounded-lg overflow-auto">

        <ul className="mt-2 mx-6 py-4 font-mono font-bold tracking-widest text-center text-lg  bg-gray-200 rounded-lg">
          <li>💰 Shopping List 💰</li>
        </ul>
        
        <div className="flex justify-between mx-6 mt-4">
         <label className="font-mono text-white text-xs flex items-center">
          Total Items: {totalProductItems}</label>
          <button onClick={productTotalHandler} className="font-mono text-xs bg-gray-400 hover:bg-gray-500 rounded-lg px-4 py-3">Add Product</button>
        </div>

        <div>{template}</div>

      </div>
    </div>
  );
}

export default App;
