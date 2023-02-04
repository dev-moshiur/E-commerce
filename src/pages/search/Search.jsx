


import { Clear, Tune } from '@material-ui/icons';
import React,{useState} from 'react'
import { useSearchParams } from "react-router-dom";
import Products from '../../components/products/Products'
import { collection } from "../../data";
import './search.scss'
export default function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchCatagory = searchParams.get("catagory")
    const searchQuery = searchParams.get("query")
    const [showFilterPage, setShowFilterPage] = useState(false)
    const [minPrice, setMinPrice] = useState(20)
    const [maxPrice, setMaxPrice] = useState(40)
    const [minDiscount, setMinDiscount] = useState(60)
    const searchedProducts = collection.filter((elm) => elm.catagory.includes(searchCatagory) && elm.productName.includes(searchQuery));
    const [pageProducts, setPageProducts] = useState(searchedProducts)

    const handleFilter =() =>{
        const filteredProducts = ()=>searchedProducts.filter(
            (item)=> item.price <= maxPrice && item.price >= minPrice && item.discount >=minDiscount
        )
        setPageProducts(filteredProducts)
        setShowFilterPage((pre)=>!pre)
    }
    
  
  return (
    <div className='searchProduct'>
        <div className="heading">
            Searched Products
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
            {pageProducts.length > 0 ? <Products items={pageProducts}/>:<div className='empty'> no item found </div>}
        
        </div>
    </div>
  )
}
