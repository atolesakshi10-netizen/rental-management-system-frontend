import { useEffect, useState } from "react";
import API from "../services/api";

import PageHeader from "./PageHeader";
import SearchBar from "./SearchBar";

import AgreementTable from "./agreement/AgreementTable";

import AddAgreementModal from "./agreement/AddAgreementModal";
import ViewAgreementModal from "./agreement/ViewAgreementModal";
import EditAgreementModal from "./agreement/EditAgreementModal";
import DeleteAgreementModal from "./agreement/DeleteAgreementModal";

import exportAgreements from "../utils/exportAgreements";

function AgreementList() {

  const [agreements, setAgreements] = useState([]);
  const [search, setSearch] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedAgreement, setSelectedAgreement] = useState(null);

  useEffect(() => {
    fetchAgreements();
  }, []);

  const fetchAgreements = async () => {

    try {

      const response = await API.get("/agreements/");

      setAgreements(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  const filteredAgreements = agreements.filter((agreement) =>

    agreement.property_id
      .toString()
      .includes(search)

    ||

    agreement.tenant_id
      .toString()
      .includes(search)

  );

  const handleView = (agreement) => {

    setSelectedAgreement(agreement);

    setShowViewModal(true);

  };

  const handleEdit = (agreement) => {

    setSelectedAgreement(agreement);

    setShowEditModal(true);

  };

  const handleDelete = (agreement) => {

    setSelectedAgreement(agreement);

    setShowDeleteModal(true);

  };

  return (

    <div className="dashboard-content">

      <PageHeader
        title="📄 Agreements"
        subtitle="Manage all rental agreements"
        buttonText="Add Agreement"
        onButtonClick={() => setShowAddModal(true)}
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
        onExport={() => exportAgreements(filteredAgreements)}
      />

      <AgreementTable
        agreements={filteredAgreements}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <AddAgreementModal
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSuccess={fetchAgreements}
      />

      <ViewAgreementModal
        show={showViewModal}
        agreement={selectedAgreement}
        onClose={() => {

          setShowViewModal(false);
          setSelectedAgreement(null);

        }}
      />

      <EditAgreementModal
        show={showEditModal}
        agreement={selectedAgreement}
        onClose={() => {

          setShowEditModal(false);
          setSelectedAgreement(null);

        }}
        onSuccess={fetchAgreements}
      />

      <DeleteAgreementModal
        show={showDeleteModal}
        agreement={selectedAgreement}
        onClose={() => {

          setShowDeleteModal(false);
          setSelectedAgreement(null);

        }}
        onSuccess={fetchAgreements}
      />

    </div>

  );

}

export default AgreementList;