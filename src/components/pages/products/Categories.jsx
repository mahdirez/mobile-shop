import React, { useContext } from "react";
import { Context } from "../../context/Context";
import "../products/product.css";
export default function Categories() {
  const [
    data,
    setData,
    handleAddCart,
    cart,
    increase,
    decrease,
    setCart,
    handleRemoveItem,
    allCategories,
    filter,
    setFilter,
    filterItem,
  ] = useContext(Context);

  return (
    <div className="btn-container">
      {allCategories.map((item) => {
        return <button onClick={()=>filterItem(item)}>{item}</button>;
      })}
    </div>
  );
}
