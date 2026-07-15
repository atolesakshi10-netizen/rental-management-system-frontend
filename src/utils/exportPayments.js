function exportPayments(payments) {

  if (!payments || payments.length === 0) {

    alert("No payments available to export.");

    return;

  }

  const headers = [

    "Payment ID",
    "Agreement ID",
    "Amount",
    "Payment Date",
    "Payment Status"

  ];

  const rows = payments.map((payment) => [

    payment.id,
    payment.agreement_id,
    payment.amount,
    payment.payment_date,
    payment.payment_status

  ]);

  const csvContent = [

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

  link.setAttribute(
    "download",
    "payments.csv"
  );

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

}

export default exportPayments;