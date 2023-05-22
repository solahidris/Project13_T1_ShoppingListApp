import React from "react";
import logo from "../logo.svg";

const AppHeader = () => {
  return (
    <div className="mb-5">
      <div className="flex justify-center py-5">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="mx-20">
        <p className="text-center text-white text-xs font-bold font-mono">
          Shopping List App
        </p>
        <p className="text-center text-white text-[10px] font-mono">
          Build a shopping list app where users can add new items to the list,
          increment/decrement each item and the change will reflect in the total
        </p>
        <p className="text-center text-white text-sm py-1 font-mono">
          ---------------------------------------
        </p>
        <p className="text-center text-white text-xs font-mono">work flow</p>
        <p className="center text-white text-xs font-mono line-through">1- main div</p>
        <p className="center text-white text-xs font-mono line-through">
          2- use ul & li for product
        </p>
        <p className="center text-white text-xs font-mono">
          3- button to add li
        </p>
        <p className="center text-white text-xs font-mono">
          4- each item have quantity
        </p>
        <p className="center text-white text-xs font-mono">
          5- + - button item quantity
        </p>
        <p className="center text-white text-xs font-mono">
          6- total item quantity
        </p>
        <p className="center text-white text-xs font-mono">
          7- total item display
        </p>
        <p className="text-center text-white text-sm py-1 font-mono">
          ---------------------------------------
        </p>
      </div>
    </div>
  );
};

export default AppHeader;
