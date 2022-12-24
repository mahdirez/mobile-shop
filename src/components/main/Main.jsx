import React, { useContext } from "react";
import "./styleMain.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

function Main() {
  const [data, setData] = useContext(Context);
  return (
    <div className="main-style">
      <h1>محصولات فروشگاه</h1>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 50 },
          480: { slidesPerView: 3, spaceBetween: 50 },
          768: { slidesPerView: 3, spaceBetween: 50 },
          1024: { slidesPerView: 5, spaceBetween: 30 },
        }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide>
              <div className="containerSwap">
                <img src={item.images[0]} className="img-swip" />
                <p>{item.title}</p>
                <Link to={`/product/${item.id}`}>
                  <button className="btn-main">دیدن جزییات محصول</button>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Main;
