const SearchItem = ({search, setSearch}) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input
            id="search"
            type="text"
            role="searchbox"
            placeholder="Search Items"
            value={search}//item set to state
            onChange={(e) => setSearch(e.target.value)}//on change, set the state to the item
            //provides one source of truth to the input and that is the state
        />
    </form>
  )
}
export default SearchItem;