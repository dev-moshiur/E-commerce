import "./product.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

import React from "react";
import { collection } from "../../data";
import {insert, drop} from '../../features/cartItem/cartitemSlice'
import {addView} from '../../features/viewProduct/viewSlice'
import { useDispatch, useSelector } from "react-redux";
import { AddShoppingCartOutlined, Cancel, Favorite } from "@material-ui/icons";

export default function Product({item}) {
  
  const {cartItems} = useSelector((state) => state.cartItem);
  
  const dispatch = useDispatch();
  const {id,img, productName, price, discount } = item;
  const [loved, setloved] = useState(false);

  const addToCart =()=>{
    if (!cartItems.includes(item)) {
      dispatch(insert(item));
    }
  }
  
  return (
    <div className="product">
      <div className={loved ? "loveFlow activeFlow clicked" : "loveFlow"}>
        <Favorite />
        <Favorite />
        <Favorite />
        <Favorite />
        <Favorite />
        <Favorite />
      </div>
      <div className="imgHolder">
        <img src={collection.filter((elm)=>elm.id == id)[0].imgSource} alt="" />
      </div>
      <div className="contentHolder">
        <span className="productName">{productName}</span>
        <div className="cost">
          <span className="price">{price}$</span>
          <span className="discount">({discount}% OFF!)</span>
          <span className="btn" onClick={()=>dispatch(addView(item))}>
            View Details
          </span>
        </div>
        <div className="curtOrShop">
          <span onClick={addToCart} className="addToCurt btn">
            Add to Cart
          </span>
          <Link to="/cart" onClick={addToCart} className="shopNow btn">
            Shop Now!
          </Link>
        </div>
        <div className={loved ? "love clicked" : "love"}>
          <Favorite onClick={() => setloved((preloved) => !preloved)} />
        </div>
        <div
          className={
            cartItems.includes(item) ? "adddToCurt active" : "adddToCurt"
          }
        >
          <AddShoppingCartOutlined className="icon" />
          <Cancel
            onClick={() =>dispatch(drop(item))} className="icon"
          />
        </div>
      </div>
    </div>
  );
}
