import {
  FaUserShield,
  FaHome,
  FaUsers,
  FaFileContract,
  FaMoneyBillWave,
  FaTrash,
  FaEdit,
  FaPlus
} from "react-icons/fa";

import "../../styles/Audit.css";

function AuditTimeline({ logs }) {

  const getIcon = (action) => {

    const text = action.toLowerCase();

    if (text.includes("property"))
      return <FaHome />;

    if (text.includes("tenant"))
      return <FaUsers />;

    if (text.includes("agreement"))
      return <FaFileContract />;

    if (text.includes("payment"))
      return <FaMoneyBillWave />;

    if (text.includes("delete"))
      return <FaTrash />;

    if (text.includes("update"))
      return <FaEdit />;

    if (text.includes("add") || text.includes("create"))
      return <FaPlus />;

    return <FaUserShield />;

  };

  return (

    <div className="history-card">

      <h3>

        📜 Recent Activity

      </h3>

      {

        logs.length === 0 ?

        (

          <div className="empty-history">

            No activities found.

          </div>

        )

        :

        (

          logs.slice(0,10).map((log)=>(

            <div
              className="history-item"
              key={log.id}
            >

              <div
                style={{
                  display:"flex",
                  gap:"15px",
                  alignItems:"center"
                }}
              >

                <div
                  style={{
                    width:"45px",
                    height:"45px",
                    borderRadius:"50%",
                    background:"#EFF6FF",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    color:"#2563EB",
                    fontSize:"18px"
                  }}
                >

                  {getIcon(log.action)}

                </div>

                <div>

                  <strong>

                    {log.user_email}

                  </strong>

                  <br/>

                  <span
                    style={{
                      color:"#64748B"
                    }}
                  >

                    {log.action}

                  </span>

                </div>

              </div>

              <div
                style={{
                  color:"#94A3B8",
                  fontSize:"14px"
                }}
              >

                {

                  new Date(log.timestamp)

                  .toLocaleString()

                }

              </div>

            </div>

          ))

        )

      }

    </div>

  );

}

export default AuditTimeline;