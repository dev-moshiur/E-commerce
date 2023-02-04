

import React from 'react'
import './search.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Search({setSearchOpen}) {

    const [searchCatagory, setSearchCatagory] = useState('');
    const [searchQuery, setSearchQuery] = useState('')
  
  return (
    <div className='searchComponent'>
        <input type="search" placeholder='write here' name="product" id="product" onChange={(e)=>setSearchQuery(e.target.value)}/>
        <select name="catagory" id="catagory" onChange={(e)=>setSearchCatagory(e.target.value)}>
            <option value="">All</option>
            <option value="jacket">Jackets</option>
            <option value="clothes">Clothes</option>
            <option value="jewellery">Jewelleries</option>
            <option value="shirt">Shirts</option>
            <option value="shoe">Shoes</option>
            <option value="watch">Watches</option>
        </select>
        <Link onClick={()=>setSearchOpen((pre)=>!pre)} to={`/search?catagory=${searchCatagory}&query=${searchQuery}`} className='searchIcon'>


        Search
        </Link>
    </div>
  )
}
