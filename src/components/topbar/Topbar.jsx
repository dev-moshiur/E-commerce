

import { ArrowDownward, KeyboardArrowDown,Clear, Menu, Person, Search, ShoppingCart } from '@material-ui/icons'
import React ,{useState}from 'react'
import { Link ,useLocation } from 'react-router-dom'

import "./topbar.scss";
import { useSelector } from 'react-redux';
import SearchComponent from '../search/Search'

export default function Topbar() {
    const {cartItems}  = useSelector((state) => state.cartItem)
    const [catagoryOpen, setCatagoryOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchCatagory, setSearchCatagory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchOpen, setSearchOpen] = useState(false)
    
    const {pathname} = useLocation()
    
    
  return (
    <div className='topbar'>
        <div className="top">
            <div className="logo">
                Masud
            </div>
            <div className="search">
                <input type="search" name="product" id="product" onChange={(e)=>setSearchQuery(e.target.value)}/>
                <select name="catagory" id="catagory" onChange={(e)=>setSearchCatagory(e.target.value)}>
                    <option value="">All</option>
                    <option value="jacket">Jackets</option>
                    <option value="clothes">Clothes</option>
                    <option value="jewellery">Jewelleries</option>
                    <option value="shirt">Shirts</option>
                    <option value="shoe">Shoes</option>
                    <option value="watch">Watches</option>
                </select>
                <Link to={`/search?catagory=${searchCatagory}&query=${searchQuery}`} className='searchIcon'>

                    <Search/>
                </Link>

            </div>
            <div className="right">
                <ShoppingCart className='cart'/>
                <span>{cartItems.length}</span>
                <Person />

            </div>

        </div>
        <div className="bottom">
        <div className="main">
            <div className="left">
            <div className="catagorybar" onClick={()=>setCatagoryOpen((pre)=>!pre)}>
                <div className="catagory">
                    
                    
                    <span>
                        Catagories
                    </span>
                    <KeyboardArrowDown className='icons'/>

                </div>
                <div className={catagoryOpen ? "toggle active":'toggle'}>
                    <div className="wrapper">
                        <Link to='/catagory/?catagory=jacket'>Jackets</Link>
                        <Link to='/catagory/?catagory=clothes'>Clothes</Link>
                        <Link to='/catagory/?catagory=jewellery'>Jewelleries</Link>
                        <Link to='/catagory/?catagory=shirt'>Shirts</Link>
                        <Link to='/catagory/?catagory=shoe'>Shoes</Link>
                        <Link to='/catagory/?catagory=watch'>Watches</Link>
                    </div>
                    

                </div>

            </div>
            </div>
            <div className="right">

            
            <div className="navbar">
                <Link className={(pathname == '/') ? 'active' : ''} to='/'>Home</Link>
                <Link className={(pathname == '/products') ? 'active' : ''} to='/products'>Products</Link>
                <Link className={(pathname == '/cart') ? 'active' : ''} to='/cart'>Cart</Link>
                <Link className={(pathname == '/contact') ? 'active' : ''} to='/contact'>Contact</Link>
            </div>
            <div className={searchOpen ? "search show":'search'}>
                <div className="main" onClick={()=>setSearchOpen((pre)=>!pre)}>
                    <Search/>
                </div>
                <div className="toggle">
                    <div className="wrapper">
                        <Clear className='clear' onClick={()=>setSearchOpen(false)}/>
                        <SearchComponent setSearchOpen={setSearchOpen}/>
                    </div>
                

                 </div>
            </div>
            
            <div className="menubar">
                <div className="menu" onClick={()=>setMenuOpen((pre)=>!pre)}>
                    {menuOpen && <Clear/>}
                    {!menuOpen && <Menu/>}
                </div>
                <div className={menuOpen? "menuLinks active":'menuLinks'}>
                    <div className="wrapper">
                        <Link className={(pathname == '/') ? 'active' : ''} onClick={()=>setMenuOpen((pre)=>!pre)} to='/'>Home</Link>
                        <Link className={(pathname == '/products') ? 'active' : ''} onClick={()=>setMenuOpen((pre)=>!pre)} to='/products'>Products</Link>
                        <Link className={(pathname == '/cart') ? 'active' : ''} onClick={()=>setMenuOpen((pre)=>!pre)} to='/cart'>Cart</Link>
                        <Link className={(pathname == '/contact') ? 'active' : ''} onClick={()=>setMenuOpen((pre)=>!pre)} to='/contact'>Contact</Link>
                    </div>
                </div>
            </div>
            
            </div>
        </div>
        

        </div>
    </div>
  )
}
