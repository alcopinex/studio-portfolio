// A controlled input: its value comes from App, and typing updates App.
function SearchBar(props) {
  function handleChange(event) {
    props.onSearchChange(event.target.value);
  }

  return (
    <div className="search">
      <label htmlFor="search" className="sr-only">Search projects</label>
      <input
        id="search"
        type="search"
        placeholder="Search Projects"
        value={props.searchText}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
