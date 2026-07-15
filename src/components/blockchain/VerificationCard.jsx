import {
  FaShieldAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaCopy
} from "react-icons/fa";

function VerificationCard({

  title,
  id,
  status,
  hash,
  onVerify

}) {

  const copyHash = () => {

    navigator.clipboard.writeText(hash);

    alert("Blockchain Hash Copied!");

  };

  return (

    <div className="verification-card">

      <div className="verification-header">

        <h3>

          <FaShieldAlt />

          &nbsp;

          {title}

        </h3>

      </div>

      <div className="verification-body">

        <div className="verification-row">

          <label>

            ID

          </label>

          <span>

            #{id}

          </span>

        </div>

        <div className="verification-row">

          <label>

            Status

          </label>

          {

            status === "VALID"

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

        <div className="verification-row">

          <label>

            Blockchain Hash

          </label>

          <div className="hash-box">

            <span>

              {hash}

            </span>

            <button
              className="copy-btn"
              onClick={copyHash}
            >

              <FaCopy />

            </button>

          </div>

        </div>

      </div>

      <button
        className="verify-btn"
        onClick={onVerify}
      >

        Verify Again

      </button>

    </div>

  );

}

export default VerificationCard;