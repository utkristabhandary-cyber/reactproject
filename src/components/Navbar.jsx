import { Link } from 'react-router-dom'

export default function Navbar({ cartItemCount }) {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        CampusCart
      </Link>
      <nav className="nav-links">
        <Link to="/" className="nav-link">
          Products
        </Link>
        <Link to="/cart" className="nav-link">
          Cart{cartItemCount > 0 && ` (${cartItemCount})`}
        </Link>
      </nav>
    </header>
  )
}