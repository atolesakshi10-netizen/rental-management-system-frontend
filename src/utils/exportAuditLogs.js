function exportAuditLogs(logs) {

  if (!logs || logs.length === 0) {

    alert("No audit logs available to export.");

    return;

  }

  const headers = [

    "ID",
    "User Email",
    "Action",
    "Timestamp"

  ];

  const rows = logs.map((log) => [

    log.id,
    log.user_email,
    log.action,
    log.timestamp

  ]);

  const csv = [

    headers.join(","),

    ...rows.map((row) => row.join(","))

  ].join("\n");

  const blob = new Blob(

    [csv],

    {
      type: "text/csv;charset=utf-8;"
    }

  );

  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = "audit_logs.csv";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

}

export default exportAuditLogs;