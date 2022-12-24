import React, { useContext } from "react";
import { Context } from "../../context/Context";
import '../products/product.css'

function Products() {
  const [data, setData] = useContext(Context);
  return (
    <div className="container-product">
      {data.map((item) => {
        return (
          <div className="cart">
            <img src={item.images[0]} className="img-product"/>
            <div className="content">
              <p>{item.title}</p>
              <p>{item.price}تومان</p>
            </div>
            <button className="addCart">افزودن به سبد خرید</button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
