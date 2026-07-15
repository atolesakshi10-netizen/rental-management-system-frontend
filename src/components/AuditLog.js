import { useEffect, useState } from "react";
import API from "../services/api";

import PageHeader from "./PageHeader";

import AuditStats from "./audit/AuditStats";
import AuditFilter from "./audit/AuditFilter";
import AuditTable from "./audit/AuditTable";
import AuditTimeline from "./audit/AuditTimeline";

import exportAuditLogs from "../utils/exportAuditLogs";

function AuditLog() {

  const [logs, setLogs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    fetchLogs();

  }, []);

  const fetchLogs = async () => {

    try {

      const response = await API.get("/audit/");

      setLogs(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  const filteredLogs = logs.filter((log) =>

    log.user_email
      .toLowerCase()
      .includes(search.toLowerCase())

    ||

    log.action
      .toLowerCase()
      .includes(search.toLowerCase())

  );

  return (

    <div className="dashboard-content">

      <PageHeader

        title="📜 Audit Logs"

        subtitle="Track every activity performed in the system"

        buttonText="Export Logs"

        onButtonClick={() => exportAuditLogs(filteredLogs)}

      />

      <AuditStats

        logs={filteredLogs}

      />

      <AuditFilter

        search={search}

        setSearch={setSearch}

        onExport={() => exportAuditLogs(filteredLogs)}

      />

      <AuditTable

        logs={filteredLogs}

      />

      <AuditTimeline

        logs={filteredLogs}

      />

    </div>

  );

}

export default AuditLog;