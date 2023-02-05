

import { Clear, Tune } from '@material-ui/icons';
import React,{useState} from 'react'

import ProductsComponent from "../../components/products/Products";
import "./products.scss";
import { collection } from "../../data";
function Products() {
  const [minPrice, setMinPrice] = useState(20)
  const [maxPrice, setMaxPrice] = useState(40)
  const [filterCatagory, setfilterCatagory] = useState('');
  const [minDiscount, setMinDiscount] = useState(60)
  const [showFilterPage, setShowFilterPage] = useState(false)
   
  const [pageProduct, setPageProduct] = useState(collection);
  const handleFilter =() =>{
    const filteredProducts = ()=>collection.filter(
        (item)=> item.price <= maxPrice && item.price >= minPrice && item.discount >=minDiscount && item.catagory.includes(filterCatagory)
    )
    setPageProduct(filteredProducts)
    setShowFilterPage((pre)=>!pre)
    setfilterCatagory('')
}
  
  return (
    
      <div className="productsPage">
        <div className="heading">
          Products
        </div>
      <div className="filter" onClick={()=>setShowFilterPage((pre)=>!pre)}>
            <Tune className='icon'/>
            <span>
                Filter
            </span>

        </div>
        {showFilterPage && <div className="filterPage">
            <Clear onClick={()=>setShowFilterPage((pre)=>!pre)} className='clear'/>
            <div className="heading">
                Filter Products
            </div>
            <div className="criteria">
                <div className="name">
                    Catagory :
                </div>
                <div className="options">
                    
                <select name="catagory" id="catagory" onChange={(e)=>setfilterCatagory(e.target.value)}>
                  <option value="">All</option>
                  <option value="jacket">Jackets</option>
                  <option value="clothes">Clothes</option>
                  <option value="jewellery">Jewelleries</option>
                  <option value="shirt">Shirts</option>
                  <option value="shoe">Shoes</option>
                  <option value="watch">Watches</option>
              </select>
                </div>
            </div>
            <div className="criteria">
                <div className="name">
                    Price Range:
                </div>
                <div className="options">
                    
                    <input type="number" placeholder='min' defaultValue={minPrice} name='minPrice' onChange={(e)=>setMinPrice(e.target.value)} />
                    <span>to</span>
                    <input type="number" placeholder='max' defaultValue={maxPrice} name='maxPrice' onChange={(e)=>setMaxPrice(e.target.value)} />
                    
                </div>
            </div>
            <div className="criteria">
                <div className="name">
                   Minimum Discount :
                </div>
                <div className="options">
                    <input type="number" defaultValue={minDiscount}  name='minDiscount' onChange={(e)=>setMinDiscount(e.target.value)} />
                </div>
            </div>
            <div className="btn" onClick={handleFilter}>
                Filter
            </div>
        </div>}
        <div className="container">
        {

          <ProductsComponent items={pageProduct}/>

        }

        </div>
        
      </div>
    
  );
}

export default Products;
