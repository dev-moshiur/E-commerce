import { ArrowForwardIos } from "@material-ui/icons";
import React from "react";
import "./viewProduct.scss";
import {insert, drop} from '../../features/cartItem/cartitemSlice'
import {addView,removeView} from '../../features/viewProduct/viewSlice'
import { useDispatch, useSelector } from "react-redux";

export default function ViewPorduct() {
  const {cartItems} = useSelector((state) => state.cartItem);
  const {item} = useSelector((state) => state.viewProduct);
  
  
  const dispatch = useDispatch();
  
  
  return (
    <div
      className={
        item.id? "viewPorduct active" : "viewPorduct"
      }
    >
      {item.id && (
        <div className="container">
          <div className="top">
            <div className="topLeft">
              <div className="img">
                <img src={item.imgSource} alt="futyuiuyti" />
              </div>
            </div>
            <div className="topRight">
              <div className="name">{item.productName}</div>
              <div className="title">Wear Fasion</div>
              <div className="describ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                accusantium aut illo cumque eveniet minima rerum odit voluptate
                nesciunt consequatur veniam non maxime nemo, numquam illum
                incidunt iure a tempora? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Sint doloribus, beatae nam cupiditate
                aspernatur excepturi optio eveniet magnam aliquid quod corrupti
                alias, reprehenderit eligendi fuga voluptatibus aperiam
                adipisci. Alias, voluptate.
              </div>
              <div className="price">
                <span>Price : </span>
                {item.price}$
              </div>
              <div className="category">
                <span>Category : </span>
                {item.catagory}
              </div>
              <div onClick={()=>dispatch(insert(item))} className="addToCart">
                Add To Cart
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="cross">
              <ArrowForwardIos onClick ={()=>dispatch(removeView())}
                
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
