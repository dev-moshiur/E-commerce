import { Person, Search, ShoppingCart, ArrowBackIos } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./topbar.scss";
import { useALLState } from "../../StateContext";
export default function Topbar() {
  const { data, dispatch, catagoryList } = useALLState();
  return (
    <>
      <div className="topBar">
        <div className="logo">Masud</div>
        <div className="otherContent">
          <div className="search">
            <div className="searchCntainer">
              <input
                type="search"
                name="search"
                onChange={(e) =>
                  dispatch({
                    type: "addSearchQuery",
                    value: e.target.value,
                  })
                }
                id="search"
              />
              <Search className="icon" />
            </div>
            <div className="right">
              <Person
                onClick={() =>
                  dispatch({
                    type: "setPopUp",
                    value: "logSign",
                  })
                }
                className="authentication"
              />
              <div className="cartIcon">
                {!data.cartItems.length == 0 ? (
                  <Link
                    to="/cart"
                    onClick={() =>
                      dispatch({
                        type: "changeActiveLink",
                        value: "cart",
                      })
                    }
                    className="cart"
                  >
                    <ShoppingCart className="icon" />
                  </Link>
                ) : (
                  <span
                    className="cart"
                    onClick={() => alert("No Product Added to Cart yet")}
                  >
                    <ShoppingCart className="icon" />
                  </span>
                )}
                <span className="quantity">{data.cartItems.length}</span>
              </div>
            </div>
          </div>
          <div className="linksBar">
            <div
              className={
                data.activeLink === "catagory" ? "left active" : "left"
              }
              onClick={() =>
                dispatch({
                  type: "setPopUp",
                  value: "catagoties",
                })
              }
            >
              Catagories
            </div>
            <div className="right">
              <Link
                className={data.activeLink === "home" ? "active" : ""}
                to="/"
                onClick={() =>
                  dispatch({
                    type: "changeActiveLink",
                    value: "home",
                  })
                }
              >
                Home
              </Link>
              <Link
                className={data.activeLink === "products" ? "active" : ""}
                to="/products"
                onClick={() =>
                  dispatch({
                    type: "changeActiveLink",
                    value: "products",
                  })
                }
              >
                Products
              </Link>

              {!data.cartItems.length == 0 ? (
                <Link
                  to="/cart"
                  onClick={() =>
                    dispatch({
                      type: "changeActiveLink",
                      value: "cart",
                    })
                  }
                  className={data.activeLink === "cart" ? "active" : ""}
                >
                  Cart
                </Link>
              ) : (
                <span onClick={() => alert("No Product Added to Cart yet")}>
                  Cart
                </span>
              )}

              

              <Link
                onClick={() =>
                  dispatch({
                    type: "changeActiveLink",
                    value: "contact",
                  })
                }
                className={data.activeLink === "contact" ? "active" : ""}
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          data.popUp === "catagoties" ? "catagoryLinks active" : "catagoryLinks"
        }
      >
        {catagoryList.map((elm) => (
          <Link
            key={elm.links}
            to={"/catagory"}
            onClick={() =>
              dispatch({
                type: "catagory",
                value: elm.links,
              })
            }
          >
            {elm.links}
          </Link>
        ))}

        <span
          onClick={() =>
            dispatch({
              type: "setPopUp",
              value: "catagoties",
            })
          }
        >
          <ArrowBackIos />
        </span>
      </div>
    </>
  );
}
