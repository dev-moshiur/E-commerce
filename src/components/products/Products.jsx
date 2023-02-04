import Product from "../product/Product";
import "./products.scss";
import { collection } from "../../data";
function Products({items}) {
  
  return (
    <>
      <div className="products">
        {items.map((element) => (
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
