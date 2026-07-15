import { useEffect, useState } from "react";
import API from "../services/api";

import PageHeader from "./PageHeader";
import SearchBar from "./SearchBar";

import PaymentTable from "./payment/PaymentTable";

import AddPaymentModal from "./payment/AddPaymentModal";
import ViewPaymentModal from "./payment/ViewPaymentModal";
import EditPaymentModal from "./payment/EditPaymentModal";
import DeletePaymentModal from "./payment/DeletePaymentModal";

import exportPayments from "../utils/exportPayments";

function PaymentList() {

  const [payments, setPayments] = useState([]);
  const [search, setSearch] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedPayment, setSelectedPayment] = useState(null);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {

    try {

      const response = await API.get("/payments/");

      setPayments(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  const filteredPayments = payments.filter((payment) =>

    payment.agreement_id
      .toString()
      .includes(search)

    ||

    payment.payment_status
      .toLowerCase()
      .includes(search.toLowerCase())

  );

  const handleView = (payment) => {

    setSelectedPayment(payment);

    setShowViewModal(true);

  };

  const handleEdit = (payment) => {

    setSelectedPayment(payment);

    setShowEditModal(true);

  };

  const handleDelete = (payment) => {

    setSelectedPayment(payment);

    setShowDeleteModal(true);

  };

  return (

    <div className="dashboard-content">

      <PageHeader
        title="💳 Payments"
        subtitle="Manage all payment transactions"
        buttonText="Add Payment"
        onButtonClick={() => setShowAddModal(true)}
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
        onExport={() => exportPayments(filteredPayments)}
      />

      <PaymentTable
        payments={filteredPayments}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <AddPaymentModal
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSuccess={fetchPayments}
      />

      <ViewPaymentModal
        show={showViewModal}
        payment={selectedPayment}
        onClose={() => {

          setShowViewModal(false);
          setSelectedPayment(null);

        }}
      />

      <EditPaymentModal
        show={showEditModal}
        payment={selectedPayment}
        onClose={() => {

          setShowEditModal(false);
          setSelectedPayment(null);

        }}
        onSuccess={fetchPayments}
      />

      <DeletePaymentModal
        show={showDeleteModal}
        payment={selectedPayment}
        onClose={() => {

          setShowDeleteModal(false);
          setSelectedPayment(null);

        }}
        onSuccess={fetchPayments}
      />

    </div>

  );

}

export default PaymentList;