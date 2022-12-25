import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "../cart/cart.css";
import toast, { Toaster } from "react-hot-toast";

function Cart() {
  const [data, setData, handleAddCart, cart, increase, decrease, setCart , handleRemoveItem] =
    useContext(Context);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const getTotal = () => {
      const response = cart.reduce((prev, item) => {
        return prev + item.count * item.price;
      }, 0);
      setTotal(response);
    };
    getTotal();
  }, [cart]);

  const handlePay = () => {
    toast.success("خرید شما با موفقیت انجام شد", {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
    setCart([]);
  };

  return (
    <div className="bg-cart">
      {cart.length > 0 ? (
        cart.map((item) => {
          return (
            <>
              <div className="container-cart">
                <div className="content-cart">
                  <img src={item.images[0]} width={250} />
                  <p>{item.title}</p>
                </div>
                <div className="num-cart">
                  <button onClick={() => increase(item.id)}>+</button>
                  <span>{item.count}</span>
                  <button onClick={() => decrease(item.id)}>-</button>
                </div>
                <div>{item.price}تومان</div>
                <button className="btn-trash" onClick={()=>handleRemoveItem(item.id)}>حذف محصول</button>
              </div>
              <hr />
            </>
          );
        })
      ) : (
        <div className="empty-item">هیچ محصولی در سبد خرید وجود ندارد...</div>
      )}
      {cart.length > 0 && (
        <div className="container-pay">
          <p className="total-cart"> مجموع قیمت: {total}</p>
          <Link to={"/"}>
            <button className="pay-cart" onClick={() => handlePay()}>
              پرداخت
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
