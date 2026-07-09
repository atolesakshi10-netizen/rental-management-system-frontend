import { useEffect, useState } from "react";
import API from "../services/api";

function AgreementList() {

    const [agreements, setAgreements] = useState([]);

    useEffect(() => {
        fetchAgreements();
    }, []);

    const fetchAgreements = async () => {

        try {

            const response = await API.get("/agreements/");

            setAgreements(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="container mt-5">

            <h1>Agreements</h1>

            <table className="table table-bordered">

                <thead>
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

                    {agreements.map((agreement) => (

                        <tr key={agreement.id}>

                            <td>{agreement.id}</td>
                            <td>{agreement.property_id}</td>
                            <td>{agreement.tenant_id}</td>
                            <td>₹{agreement.monthly_rent}</td>
                            <td>{agreement.start_date}</td>
                            <td>{agreement.end_date}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default AgreementList;