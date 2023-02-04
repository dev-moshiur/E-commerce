


import Product from "../../components/product/Product";
import "./products.scss";
import { collection } from "../../data";
function Products() {
  
  return (
    <>
      <div className="products">
        {collection.map((element) => (
          <Product
            className="products"
            item={element}
            
            key={element.id}
          />
        ))}
      </div>
    </>
  );
}

export default Products;
