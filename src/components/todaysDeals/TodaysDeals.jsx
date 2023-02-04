import "./todaysDeals.scss";
import React from "react";
import { Link } from "react-router-dom";
import { collection } from "../../data";
export default function TodaysDeals() {
  
  let itemsData = collection.filter((item) => item.catagory === "others");

  return (
    <div className="todaysDeals">
      <div className="heading2">Our New Products</div>
      <div className="products">
      {itemsData.map((element) => (
        <Link key={element.id} to="/catagory" className="item">
          <img src={element.imgSource} alt="" />
          <div className="text">{element.price}$</div>
        </Link>
      ))}

      </div>
      
    </div>
  );
}
