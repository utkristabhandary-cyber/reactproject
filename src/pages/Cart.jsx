import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem.jsx'
import CartSummary from '../components/CartSummary.jsx'

export default function Cart({ cart, onIncrease, onDecrease, onRemove }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <section className="cart-page">
      <h1 className="page-title">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/" className="shop-link">
            Browse Products
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-layout">
            <ul className="cart-list">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrease={onIncrease}
                  onDecrease={onDecrease}
                  onRemove={onRemove}
                />
              ))}
            </ul>
            <CartSummary totalItems={totalItems} totalPrice={totalPrice} />
          </div>
          <Link to="/" className="back-link">
            Back to Products
          </Link>
        </>
      )}
    </section>
  )
}