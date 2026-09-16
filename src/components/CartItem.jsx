export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <li className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-info">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">${item.price.toFixed(2)} each</p>
      </div>
      <div className="quantity-controls">
        <button
          type="button"
          className="quantity-button"
          onClick={() => onDecrease(item.id)}
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="quantity">{item.quantity}</span>
        <button
          type="button"
          className="quantity-button"
          onClick={() => onIncrease(item.id)}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <p className="cart-item-total">${(item.price * item.quantity).toFixed(2)}</p>
      <button
        type="button"
        className="remove-button"
        onClick={() => onRemove(item.id)}
      >
        Remove
      </button>
    </li>
  )
}