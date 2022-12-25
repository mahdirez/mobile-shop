import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import '../infoCard/infoCard.css'



export default function InfoCard() {
  const [data, setData , handleAddCart] = useContext(Context);
  const [img , setImg] = useState(0)
  const { id } = useParams();
  const detail = data.filter((item) => {
    return item.id === id;
  });
  return (
    <div>
      {detail.map((item) => {
        return (
          <div className="container-info">
            <div className="img-info">
              <img src={item.images[img]} className='image-info'/>
            </div>
            <div className="content-info">
              <h1>{item.title}</h1>
              <p className="info-dec">{item.description}</p>
              <p className="info-con">{item.content}</p>
              <div>
                {item.images.map((img,index)=>{
                   return <button className="filterImg" onClick={()=>setImg(index)}><img src={img}  /></button>
                })}
              </div>
              <p className='info-price'>قیمت :{item.price}تومان</p>
              <button className="info-add" onClick={()=>handleAddCart(item.id)}>افزودن به سبد خرید</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
