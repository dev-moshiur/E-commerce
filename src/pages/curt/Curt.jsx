import React from "react";
import "./curt.scss";
import CurtProduct from "../../components/curtProduct/CurtProduct";
import {increaseTotalPrice, drop,decreaseTotalPrice} from '../../features/cartItem/cartitemSlice'
import { useDispatch, useSelector } from "react-redux";

export default function Curt() {
  const {cartItems,totalPrice}  = useSelector((state) => state.cartItem)
  
  const dispatch = useDispatch();
  
  
  
  return (
    <div className="curt">
      <div className="productsHeading">
        <span>{cartItems.length} Item Selected</span>
        {cartItems.length==0 && <div>Cart is empty</div>}
      </div>
      <div className="content">
        <div className="productsContainer">
          <div className="products">
            
            {cartItems.map((item) => (
              <CurtProduct key={item.id} itemData={item} />
            ))}
          </div>
        </div>
        {!cartItems.length==0 &&
        <div className="summery">
          <div className="heading">Order Summery</div>
          <div className="subTotal">
            <span className="name">Product Price</span>
            <span className="number">{totalPrice}$</span>
          </div>
          <div className="deliveryCost">
            <span className="name">Delivery Charge</span>
            <span className="number">{5}$</span>
          </div>
          <div className="total">
            <span className="name">Total</span>
            <span className="number">{totalPrice + 5}$</span>
          </div>
          <div className="orderNow">Order Now</div>
        </div>}
      </div>
    </div>
  );
}
