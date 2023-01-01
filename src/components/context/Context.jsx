import React, { createContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import dataApp from "../../data";

export const Context = createContext();
export function Provider(props) {
  const [data, setData] = useState(dataApp);
  const [cart, setCart] = useState([]);
  const handleAddCart = (id) => {
    const checkItem = cart.every((item) => {
      return item.id !== id;
    });
  
    if (checkItem) {
      toast.success(" محصول با موفقیت به سبد خرید اضافه شد");
      const product = data.filter((item) => {
        return item.id === id;
      });
      setCart([...cart, ...product]);
    } else {
      toast.error("این محصول قبلا اضافه شده!!!");
    }
  };


  const increase = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };
  const decrease = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };

  const handleRemoveItem = (id) => {
    setCart(
      cart.filter((item) => {
        return item.id !== id;
      })
    );
    cart.forEach((item)=>{
      if(item.id === id){
        console.log(item.count)
       return item.count = 1;
     
      }
    })
    toast.error("محصول حذف شد!");
  };

  const allCategories = [
    "همه",
    ...new Set(data.map((item) => item.categories)),
  ];

  const [filter, setFilter] = useState(dataApp);

  const filterItem = (categories) => {
    if (categories === "همه") {
      return setFilter(dataApp);
    }
    const loop = dataApp.filter((item) => item.categories === categories);
    setFilter(loop);
  };

 
  return (
    <Context.Provider
      value={[
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
      ]}
    >
      {props.children}
    </Context.Provider>
  );
}
