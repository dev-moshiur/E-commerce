import React from "react";
import Products from "../../components/products/Products";

// import CatagorySlider from "../../components/catagorySlider/CatagorySlider";
import Reviews from '../../components/singleReview/SingleReview'
import TodaysDeals from "../../components/todaysDeals/TodaysDeals";
import "./home.scss";
import Banner from "../../components/banner/Banner";
import { collection } from "../../data";
import { Link } from "react-router-dom";
export default function Home() {
  
  const fewProducts=collection.slice(0,11);
  const topDiscountProducts=collection.filter((elm)=>elm.discount>65)
  const shoesProducts=collection.filter((elm)=>elm.catagory==='shoe').slice(0,7)
  const jacketsProducts=collection.filter((elm)=>elm.catagory==='jacket').slice(0,5)
  const watchsProducts=collection.filter((elm)=>elm.catagory==='watch').slice(0,7)
  const jewellerysProducts=collection.filter((elm)=>elm.catagory==='jewellery').slice(0,5)

  
  

  return (
    <div className="home">
      <div className="top">
        <TodaysDeals className="side" />
        <Banner className="side" />
      </div>
      <div className="heading">FLASH DEALS</div>
      <Products items={fewProducts}/>

      <div className="heading">Top Discount</div>
      <Products items={topDiscountProducts}/>
      <div className="heading">Shoes</div>
      <Products items={shoesProducts}/>
      <Link to='/catagory/?catagory=shoe' className="view">
        View All
      </Link>

      <div className="heading">Jackets</div>
      <Products items={jacketsProducts}/>
      <Link to='/catagory/?catagory=jacket' className="view">
        View All
      </Link>

      <div className="heading">Watches</div>
      <Products items={watchsProducts}/>
      <Link to='/catagory/?catagory=watch' className="view">
        View All
      </Link>

      <div className="heading">Jewelleries</div>
      <Products items={jewellerysProducts}/>
      <Link to='/catagory/?catagory=jewellery' className="view">
        View All
      </Link>
      <Reviews/>
    </div>
  );
}
