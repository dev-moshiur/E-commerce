import "./app.scss";
import Catagory from "./pages/catagory/Catagory";
import Products from "./pages/products/Products";
import Curt from "./pages/curt/Curt";
import About from "./pages/about/About";
import { Routes, Route } from "react-router-dom";
import Topber from "./components/topbar/Topbar";
import { useState } from "react";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Search from './pages/search/Search'

import View from "./pages/viewProduct/ViewPorduct";


import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      
        <Topber className="topbar" />
        
        <View />
        <div className="routes">
          
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="cart" element={<Curt />} />
              <Route path="catagory" element={<Catagory />} />
              <Route path="products" element={<Products />} />
              <Route path="search" element={<Search />} />
              
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </div>
        <Footer/>
     
    </div>
  );
}

export default App;
