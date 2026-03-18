const SearchBar = ({filterText, inStockOnly}) => {
  return (
    <form>
        <input
            type="text"
            value={filterText}
            placeholder="Search..." 
        /><br />
        <label>
            <input
                type="checkbox"
                value={inStockOnly}
            />
            {' '}
            Only show products in stock
        </label>
    </form>
  )
}

export default SearchBar