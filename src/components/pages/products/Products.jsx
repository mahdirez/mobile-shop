import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "../products/product.css";
import Categories from "./Categories";

function Products() {
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
  ] = useContext(Context);
  console.log("first");
  return (
    <>
      <div className="title">
        <h2>محصولات ما</h2>
        <div className="underline"></div>
      </div>
      <Categories />
      <div className="container-product">
        {filter.map((item) => {
          return (
            <div className="cart">
              <div className="res">
                <Link to={`/product/${item.id}`}>
                  <img src={item.images[0]} className="img-product" />
                  <div className="content">
                    <p className="p-ti">{item.title}</p>
                    <p>{item.price}تومان</p>
                  </div>
                </Link>
              </div>
              <button
                className="addCart"
                onClick={() => handleAddCart(item.id)}
              >
                افزودن به سبد خرید
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
