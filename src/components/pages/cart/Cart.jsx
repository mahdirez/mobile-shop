import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "../cart/cart.css";

function Cart() {
  const [data, setData, handleAddCart, cart, increase, decrease , setCart] =
    useContext(Context);
    const [total , setTotal] = useState(0)
    useEffect(()=>{
      const getTotal = ()=>{
        const response = cart.reduce((prev , item)=>{
          return prev + (item.count * item.price);
        },0)
        setTotal(response)
      }
      getTotal()
    },[cart])

    const handlePay = ()=>{
      alert('خرید شما با موفقیت انجام شد');
      setCart([])
    }
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
              </div>
              <hr />
            </>
          );
        })
      ) : (
        <div>no item...</div>
      )}
      {cart.length > 0 && (
        <div className="container-pay">
          <p className="total-cart"> مجموع قیمت: {total}</p>
          <Link to={'/'}><button className="pay-cart" onClick={()=>handlePay()}>پرداخت</button></Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
