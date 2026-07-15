import { useEffect, useState } from "react";
import API from "../services/api";

import PageHeader from "../components/PageHeader";
import SearchBar from "../components/SearchBar";
import PropertyTable from "../components/PropertyTable";

import AddPropertyModal from "../components/AddPropertyModal";
import ViewPropertyModal from "../components/ViewPropertyModal";
import EditPropertyModal from "../components/EditPropertyModal";
import DeletePropertyModal from "../components/DeletePropertyModal";

import exportProperties from "../utils/exportProperties";

function PropertyList() {

  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {

    fetchProperties();

  }, []);

  const fetchProperties = async () => {

    try {

      const response = await API.get("/properties/");

      setProperties(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  const filteredProperties = properties.filter((property) =>

    property.property_name
      .toLowerCase()
      .includes(search.toLowerCase())

    ||

    property.address
      .toLowerCase()
      .includes(search.toLowerCase())

  );

  const handleView = (property) => {

    setSelectedProperty(property);

    setShowViewModal(true);

  };

  const handleEdit = (property) => {

    setSelectedProperty(property);

    setShowEditModal(true);

  };

  const handleDelete = (property) => {

    setSelectedProperty(property);

    setShowDeleteModal(true);

  };

  return (

    <div className="dashboard-content">

      <PageHeader
        title="🏠 Properties"
        subtitle="Manage all your rental properties"
        buttonText="Add Property"
        onButtonClick={() => setShowAddModal(true)}
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
        onExport={() => exportProperties(filteredProperties)}
      />

      <PropertyTable
        properties={filteredProperties}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <AddPropertyModal
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSuccess={fetchProperties}
      />

      <ViewPropertyModal
        show={showViewModal}
        property={selectedProperty}
        onClose={() => {

          setShowViewModal(false);

          setSelectedProperty(null);

        }}
      />

      <EditPropertyModal
        show={showEditModal}
        property={selectedProperty}
        onClose={() => {

          setShowEditModal(false);

          setSelectedProperty(null);

        }}
        onSuccess={fetchProperties}
      />

      <DeletePropertyModal
        show={showDeleteModal}
        property={selectedProperty}
        onClose={() => {

          setShowDeleteModal(false);

          setSelectedProperty(null);

        }}
        onSuccess={fetchProperties}
      />

    </div>

  );

}

export default PropertyList;