import "./Stats.css";
import { motion } from "framer-motion";

function Stats() {

    const stats = [

        {
            number: "100+",
            title: "Properties"
        },

        {
            number: "250+",
            title: "Tenants"
        },

        {
            number: "₹10L+",
            title: "Payments"
        },

        {
            number: "100%",
            title: "Blockchain Secure"
        }

    ];

    return (

        <section className="stats-section">

            <h2>

                Trusted by Property Owners

            </h2>

            <div className="stats-grid">

                {

                    stats.map((item,index)=>(

                        <motion.div

                            key={index}

                            whileHover={{scale:1.05}}

                            className="stat-card"

                        >

                            <h1>

                                {item.number}

                            </h1>

                            <p>

                                {item.title}

                            </p>

                        </motion.div>

                    ))

                }

            </div>

        </section>

    );

}

export default Stats;