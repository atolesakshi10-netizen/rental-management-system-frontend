import { useEffect, useState } from "react";
import API from "../services/api";

function TenantList() {

    const [tenants, setTenants] = useState([]);
    const [search, setSearch] = useState("");

    const filteredTenants = tenants.filter(
        (tenant) =>
            tenant.tenant_name
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            tenant.email
                .toLowerCase()
                .includes(search.toLowerCase())
    );

    useEffect(() => {
        fetchTenants();
    }, []);

    const fetchTenants = async () => {

        try {

            const response = await API.get(
                "/tenants/"
            );

            setTenants(response.data);

        }
        catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="container mt-5">

            <h1>Tenants</h1>

            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search Tenant by Name or Email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <table className="table table-bordered">

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        filteredTenants.map((tenant) => (

                            <tr key={tenant.id}>

                                <td>{tenant.id}</td>

                                <td>{tenant.tenant_name}</td>

                                <td>{tenant.email}</td>

                                <td>{tenant.phone}</td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );

}

export default TenantList;