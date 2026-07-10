import { useEffect, useState } from "react";
import API from "../services/api";

function AgreementList() {

    const [agreements, setAgreements] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchAgreements();
    }, []);

    const fetchAgreements = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await API.get(
                "/agreements/",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setAgreements(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const filteredAgreements = agreements.filter(
        (agreement) =>
            agreement.property_id
                .toString()
                .includes(search) ||

            agreement.tenant_id
                .toString()
                .includes(search)
    );

    return (

        <div className="container mt-5">

            <h2>Agreements</h2>

            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search by Property ID or Tenant ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <table className="table table-bordered table-striped">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>
                        <th>Property ID</th>
                        <th>Tenant ID</th>
                        <th>Monthly Rent</th>
                        <th>Start Date</th>
                        <th>End Date</th>

                    </tr>

                </thead>

                <tbody>

                    {filteredAgreements.length > 0 ? (

                        filteredAgreements.map((agreement) => (

                            <tr key={agreement.id}>

                                <td>{agreement.id}</td>
                                <td>{agreement.property_id}</td>
                                <td>{agreement.tenant_id}</td>
                                <td>₹{agreement.monthly_rent}</td>
                                <td>{agreement.start_date}</td>
                                <td>{agreement.end_date}</td>

                            </tr>

                        ))

                    ) : (

                        <tr>

                            <td
                                colSpan="6"
                                className="text-center"
                            >
                                No Agreements Found
                            </td>

                        </tr>

                    )}

                </tbody>

            </table>

        </div>

    );

}

export default AgreementList;