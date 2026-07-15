import { useEffect, useState } from "react";
import API from "../services/api";

import PageHeader from "./PageHeader";
import SearchBar from "./SearchBar";

import TenantTable from "./tenant/TenantTable";
import AddTenantModal from "./tenant/AddTenantModal";
import ViewTenantModal from "./tenant/ViewTenantModal";
import EditTenantModal from "./tenant/EditTenantModal";
import DeleteTenantModal from "./tenant/DeleteTenantModal";

import exportTenants from "../utils/exportTenants";
function TenantList() {

  const [tenants, setTenants] = useState([]);
  const [search, setSearch] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedTenant, setSelectedTenant] = useState(null);

  useEffect(() => {

    fetchTenants();

  }, []);

  const fetchTenants = async () => {

    try {

      const response = await API.get("/tenants/");

      setTenants(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  const filteredTenants = tenants.filter((tenant) =>

    tenant.tenant_name
      .toLowerCase()
      .includes(search.toLowerCase())

    ||

    tenant.email
      .toLowerCase()
      .includes(search.toLowerCase())

  );

  const handleView = (tenant) => {

    setSelectedTenant(tenant);

    setShowViewModal(true);

  };

  const handleEdit = (tenant) => {

    setSelectedTenant(tenant);

    setShowEditModal(true);

  };

  const handleDelete = (tenant) => {

    setSelectedTenant(tenant);

    setShowDeleteModal(true);

  };

  return (

    <div className="dashboard-content">

      <PageHeader
        title="👥 Tenants"
        subtitle="Manage all tenants"
        buttonText="Add Tenant"
        onButtonClick={() => setShowAddModal(true)}
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
        onExport={() => exportTenants(filteredTenants)}
      />

      <TenantTable
        tenants={filteredTenants}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <AddTenantModal
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSuccess={fetchTenants}
      />

      <ViewTenantModal
        show={showViewModal}
        tenant={selectedTenant}
        onClose={() => {

          setShowViewModal(false);

          setSelectedTenant(null);

        }}
      />

      <EditTenantModal
        show={showEditModal}
        tenant={selectedTenant}
        onClose={() => {

          setShowEditModal(false);

          setSelectedTenant(null);

        }}
        onSuccess={fetchTenants}
      />

      <DeleteTenantModal
        show={showDeleteModal}
        tenant={selectedTenant}
        onClose={() => {

          setShowDeleteModal(false);

          setSelectedTenant(null);

        }}
        onSuccess={fetchTenants}
      />

    </div>

  );

}

export default TenantList;