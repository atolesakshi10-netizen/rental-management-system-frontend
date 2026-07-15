import {
  FaHistory,
  FaCheckCircle,
  FaTimesCircle
} from "react-icons/fa";

function VerificationHistory({

  history

}) {

  if (!history || history.length === 0) {

    return (

      <div className="history-card">

        <h3>

          <FaHistory />

          &nbsp;

          Verification History

        </h3>

        <div className="empty-history">

          No verification history available.

        </div>

      </div>

    );

  }

  return (

    <div className="history-card">

      <h3>

        <FaHistory />

        &nbsp;

        Verification History

      </h3>

      <div className="history-list">

        {

          history.map((item, index) => (

            <div
              className="history-item"
              key={index}
            >

              <div>

                <strong>

                  {item.type}

                </strong>

                <br />

                #{item.id}

              </div>

              <div>

                {

                  item.status === "VALID"

                  ?

                  <span className="verify-valid">

                    <FaCheckCircle />

                    &nbsp;

                    VALID

                  </span>

                  :

                  <span className="verify-invalid">

                    <FaTimesCircle />

                    &nbsp;

                    TAMPERED

                  </span>

                }

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default VerificationHistory;