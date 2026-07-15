import "./Features.css";
import {
    FaBuilding,
    FaUsers,
    FaFileContract,
    FaMoneyBillWave,
    FaShieldAlt,
    FaChartBar
} from "react-icons/fa";

const features = [
    {
        icon: <FaBuilding />,
        title: "Property Management",
        desc: "Manage all rental properties efficiently."
    },
    {
        icon: <FaUsers />,
        title: "Tenant Management",
        desc: "Store and manage tenant records."
    },
    {
        icon: <FaFileContract />,
        title: "Rental Agreements",
        desc: "Digital agreements with blockchain verification."
    },
    {
        icon: <FaMoneyBillWave />,
        title: "Payments",
        desc: "Track rent payments and receipts."
    },
    {
        icon: <FaShieldAlt />,
        title: "Blockchain Security",
        desc: "Tamper-proof agreement verification."
    },
    {
        icon: <FaChartBar />,
        title: "Analytics",
        desc: "Dashboard statistics and reports."
    }
];

function Features() {

    return (

        <section className="features-section" id="features">

            <h2>

                Powerful Features

            </h2>

            <p>

                Everything you need to manage your rental business.

            </p>

            <div className="features-grid">

                {features.map((feature, index) => (

                    <div
                        key={index}
                        className="feature-card"
                    >

                        <div className="feature-icon">

                            {feature.icon}

                        </div>

                        <h3>

                            {feature.title}

                        </h3>

                        <p>

                            {feature.desc}

                        </p>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default Features;