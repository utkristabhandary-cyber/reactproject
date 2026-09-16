import { useState } from 'react'
import { products } from '../data/products.js'
import SearchBar from '../components/SearchBar.jsx'
import CategoryFilter from '../components/CategoryFilter.jsx'
import ProductGrid from '../components/ProductGrid.jsx'

export default function Products({ onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(products.map((product) => product.category))]

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="products-page">
      <h1 className="page-title">Products</h1>
      <div className="product-controls">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>
      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} onAddToCart={onAddToCart} />
      ) : (
        <p className="empty-message">No products found.</p>
      )}
    </section>
  )
}