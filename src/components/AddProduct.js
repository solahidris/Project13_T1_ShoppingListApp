import React from "react";

const AddProduct = ({productTotalHandler}) => {
    return(
        <div>
        <button onClick={productTotalHandler} className="font-mono text-xs bg-gray-400 hover:bg-gray-500 rounded-lg px-4 py-3">Add Product</button>
        </div>
    )
};

export default AddProduct;

