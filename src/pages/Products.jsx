import { products } from '../data/products.js'
import ProductGrid from '../components/ProductGrid.jsx'

export default function Products({ onAddToCart }) {
  return (
    <section className="products-page">
      <h1 className="page-title">Products</h1>
      <ProductGrid products={products} onAddToCart={onAddToCart} />
    </section>
  )
}