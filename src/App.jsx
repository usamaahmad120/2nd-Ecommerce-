import React from 'react'
import Navbar from './component/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Footer from './component/Footer/Footer'
import man_banner from './component/Assest/banner_mens.png'
import women_banner from './component/Assest/banner_women.png'
import kid_banner from './component/Assest/banner_kids.png'
import Register from './pages/Register'
import Login from './pages/Login'
import ProductCard from './component/ProductCard/ProductCard'



function App() {
  return (
   <>

   <div>
    
   <BrowserRouter>
   <Navbar/>

   <Routes>
    <Route path='/' element ={<Shop/>} />
    <Route path='/mens' element = {<ShopCategory  bunner = {man_banner} category = "men"/>}/>
    <Route path='/womens' element = {<ShopCategory bunner ={women_banner} category = "women" />}/>
    <Route path='/kids' element = {<ShopCategory bunner= {kid_banner} category = "kid"/>}/>
      <Route path="/" element={<ProductCard/>} />
    <Route path="/product/:ProductId" element={<Product />} />
    <Route path='/cart' element = {<Cart/>}/>
    <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
   </Routes>
   
   <Footer/>
   </BrowserRouter>
   
    
   </div>
   
   </>
  )
}

export default App