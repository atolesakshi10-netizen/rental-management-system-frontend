import { FaSearch, FaDownload } from "react-icons/fa";
import "../styles/SearchBar.css";

function SearchBar({
  search,
  setSearch,
  onExport
}) {

  return (

    <div className="search-toolbar">

      <div className="search-box-modern">

        <FaSearch />

        <input
          type="text"
          placeholder="Search Property..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <button
        className="export-btn"
        onClick={onExport}
      >

        <FaDownload />

        Export

      </button>

    </div>

  );

}

export default SearchBar;