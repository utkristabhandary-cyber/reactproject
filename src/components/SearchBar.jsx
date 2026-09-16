export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(event) => onSearchChange(event.target.value)}
    />
  )
}