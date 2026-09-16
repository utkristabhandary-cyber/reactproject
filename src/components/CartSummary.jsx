export default function CartSummary({ totalItems, totalPrice }) {
  return (
    <aside className="cart-summary">
      <h2>Cart Summary</h2>
      <p>Items: {totalItems}</p>
      <p>Total: ${totalPrice.toFixed(2)}</p>
    </aside>
  )
}