import { Link } from 'react-router-dom'

export default function Cart() {
  return (
    <section className="cart-page">
      <h1 className="page-title">Your Cart</h1>
      <div className="empty-cart">
        <p>Your cart is empty.</p>
        <Link to="/" className="shop-link">
          Browse Products
        </Link>
      </div>
    </section>
  )
}