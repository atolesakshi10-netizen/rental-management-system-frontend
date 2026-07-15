function exportTenants(tenants) {

  if (!tenants.length) {

    alert("No tenants found.");

    return;

  }

  const headers = [

    "ID",
    "Tenant Name",
    "Email",
    "Phone"

  ];

  const rows = tenants.map((tenant) => [

    tenant.id,
    tenant.tenant_name,
    tenant.email,
    tenant.phone

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

  link.download = "tenants.csv";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

}

export default exportTenants;