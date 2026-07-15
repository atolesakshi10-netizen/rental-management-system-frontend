function exportProperties(properties) {

  if (!properties || properties.length === 0) {

    alert("No properties available to export.");

    return;

  }

  const headers = [

    "ID",
    "Property Name",
    "Address",
    "Rent Amount",
    "Status"

  ];

  const rows = properties.map((property) => [

    property.id,

    property.property_name,

    property.address,

    property.rent_amount,

    "Active"

  ]);

  const csvContent =

    [
      headers.join(","),

      ...rows.map((row) => row.join(","))

    ].join("\n");

  const blob = new Blob(

    [csvContent],

    {
      type: "text/csv;charset=utf-8;"
    }

  );

  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = "properties.csv";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

}

export default exportProperties;