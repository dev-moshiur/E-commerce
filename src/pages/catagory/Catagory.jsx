import { ArrowDownwardOutlined, ArrowLeft } from "@material-ui/icons";
import React, { useEffect } from "react";
import "./catagory.scss";
import Product from "../../components/product/Product";
import { collection } from "../../data";
import { useSearchParams } from "react-router-dom";

export default function Catagory() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchCatagory = searchParams.get("catagory")
  
  let catagoryProduct = collection.filter(
    (elm) => elm.catagory === searchCatagory
  );
  return (
    <>
      <div className="catagory">
       <div className="heading2">
        {searchCatagory+'s'}

       </div>
        <div className="catagoryProduct">
          {catagoryProduct.map((element) => (
            <Product
              className="products"
              item={element}
              key={element.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
