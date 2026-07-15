import { FaSearch, FaDownload } from "react-icons/fa";

import "../../styles/Audit.css";

function AuditFilter({
  search,
  setSearch,
  onExport
}) {

  return (

    <div className="audit-toolbar">

      <div className="search-box-modern">

        <FaSearch />

        <input
          type="text"
          placeholder="Search by Email or Action..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <button
        className="export-btn"
        onClick={onExport}
      >

        <FaDownload />

        Export Logs

      </button>

    </div>

  );

}

export default AuditFilter;