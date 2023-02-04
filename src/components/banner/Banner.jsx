import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { collection } from "../../data";
import "./banner.scss";
const Banner = ({}) => {
  
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <div className="banner">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="sliderItem">
          <div className="img">
            <img src={collection[5].imgSource} alt="gh" />
          </div>
          <div className="textContent">
            <h3>
              <span>50 % Off</span> For Your Frist Shopping
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
               aperiam id ipsum optio assumenda iusto odit temporibus nesciunt 
               </p>
            <button>Visite now</button>
            <button>Add To Cart!</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sliderItem">
          <div className="img">
            <img src={collection[6].imgSource} alt="gh" />
          </div>
          <div className="textContent">
            <h3>
              <span>50 % Off</span> For Your Frist Shopping
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
               aperiam id ipsum optio assumenda iusto odit temporibus nesciunt 
               </p>
            <button>Visite now</button>
            <button>Add To Cart!</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sliderItem">
          <div className="img">
            <img src={collection[7].imgSource} alt="gh" />
          </div>
          <div className="textContent">
            <h3>
              <span>50 % Off</span> For Your Frist Shopping
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
               aperiam id ipsum optio assumenda iusto odit temporibus nesciunt 
               </p>
            <button>Visite now</button>
            <button>Add To Cart!</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sliderItem">
          <div className="img">
            <img src={collection[8].imgSource} alt="" />
          </div>
          <div className="textContent">
            <h3>
              <span>50 % Off</span> For Your Frist Shopping
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
               aperiam id ipsum optio assumenda iusto odit temporibus nesciunt 
               </p>
            <button>Visite now</button>
            <button>Add To Cart!</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
