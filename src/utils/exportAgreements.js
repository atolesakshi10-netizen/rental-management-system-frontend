function exportAgreements(agreements) {

  if (!agreements.length) {

    alert("No agreements found.");

    return;

  }

  const headers = [

    "Agreement ID",
    "Property ID",
    "Tenant ID",
    "Monthly Rent",
    "Start Date",
    "End Date"

  ];

  const rows = agreements.map((agreement) => [

    agreement.id,
    agreement.property_id,
    agreement.tenant_id,
    agreement.monthly_rent,
    agreement.start_date,
    agreement.end_date

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
  link.download = "agreements.csv";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

}

export default exportAgreements;