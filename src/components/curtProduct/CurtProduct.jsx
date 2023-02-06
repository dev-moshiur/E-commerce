import { CancelPresentation } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import "./curtProduct.scss";
import { Link } from "react-router-dom";
import {increaseTotalPrice, drop,decreaseTotalPrice} from '../../features/cartItem/cartitemSlice'
import { useDispatch, useSelector } from "react-redux";

export default function CurtProduct({ itemData }) {
  const {cartItems,totalPrice} = useSelector((state) => state.cartItem)
   
  const dispatch = useDispatch();
  
  const [quantity, setQuantity] = useState(1);
  
  const increase = () => {
     setQuantity((prequantity) => prequantity + 1);
     dispatch(increaseTotalPrice(itemData.price))
  };
  const decrease = () => {
    if (quantity > 1) {
       setQuantity((prequantity) => prequantity - 1);
       dispatch(decreaseTotalPrice(itemData.price))

       }
  };
  const removeItem = () => {
    dispatch(drop(itemData))
    dispatch(decreaseTotalPrice(itemData.price * (quantity - 1)))

  };

  return (
    <div className="productItem">
      <span onClick={removeItem} className="drop">
        {cartItems.length == 1 ? (
          <Link
            
            to="/"
          >
            <CancelPresentation />
          </Link>
        ) : (
          <CancelPresentation />
        )}
      </span>
      <div className="left">
        <div className="img">
          <img src={itemData.imgSource} alt="" />
        </div>
        <div className="productName">
          {itemData.productName}( Id: {itemData.id})
        </div>
      </div>
      <div className="middle">
        <label htmlFor="color">Select Color</label>
        <select name="color" id="color">
          <option value="green">Color</option>
        </select>
        <label htmlFor="size">Select Size</label>

        <select name="size" id="size">
          <option disabled value="size">
            Size
          </option>

          <option value="SM">S</option>
          <option value="MD">M</option>
          <option value="LG">L</option>
          <option value="XL">X-L</option>
          <option value="XXL">XX-L</option>
        </select>
      </div>
      <div className="right">
        <span className="quantityAndPrice">Set Quantity And Price</span>
        <span className="increase" onClick={increase}>
          +
        </span>
        <span className="priceNumber">{quantity}</span>
        <span className="decrease" onClick={decrease}>
          -
        </span>
        <div className="price">{itemData.price * quantity}$</div>
      </div>
    </div>
  );
}
