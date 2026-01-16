import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Product from './components/Product'
import Cart from './components/Cart'
import Head from './components/Head'
import CartProvider from './context/CartContext'
import SideBar from './components/SideBar'
import About from './components/About'
import Profile from './components/Profile'
import Settings from './components/Settings'
import Orders from './components/Orders'

export default function App() {
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
      <div className="flex min-h-screen">
        <SideBar/>
      <div className="flex-1 overflow-y-auto bg-[#FFFBF2]">
        <div className="flex flex-col">
          <Head/>
          <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/orders" element={<Orders/>}/>
        </Routes>
        </div>
      </div>
      </div>
      </BrowserRouter>
      </CartProvider>
      
    </div>
  )
}

