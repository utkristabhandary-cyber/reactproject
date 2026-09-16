import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Products from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'

export default function App() {
  const [cart] = useState([])

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="app">
      <Navbar cartItemCount={cartItemCount} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  )
}