import { useEffect, useState } from "react";
import API from "../services/api";

function PropertyList() {

    const [properties, setProperties] = useState([]);
    const [search, setSearch] = useState("");
    const filteredProperties = properties.filter(
    (property) =>
        property.property_name
            .toLowerCase()
            .includes(search.toLowerCase()) ||

        property.address
            .toLowerCase()
            .includes(search.toLowerCase())
);

    useEffect(() => {

        fetchProperties();

    }, []);

    const fetchProperties = async () => {

        try {

            const response = await API.get(
                "/properties/"
            );

            setProperties(response.data);

        }
        catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="container mt-5">
            return (
    <div className="container mt-5">

        <h2>Properties</h2>

        <input
            type="text"
            className="form-control mb-3"
            placeholder="Search Property by Name or Address..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />

        <table className="table table-bordered">
            ...
        </table>

    </div>
);

            <h1>Properties</h1>

            <table className="table table-bordered">

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Property Name</th>
                        <th>Address</th>
                        <th>Rent Amount</th>

                    </tr>

                </thead>

              <tbody>
    {filteredProperties.map((property) => (
        <tr key={property.id}>
            <td>{property.property_name}</td>
            <td>{property.address}</td>
            <td>{property.rent_amount}</td>
        </tr>
    ))}
</tbody>  

            </table>

        </div>

    );

}

export default PropertyList;