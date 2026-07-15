import { useEffect, useState } from "react";
import API from "../../services/api";

import VerificationCard from "./VerificationCard";
import VerificationHistory from "./VerificationHistory";

import "../../styles/Blockchain.css";

function BlockchainView() {

  const [agreements, setAgreements] = useState([]);
  const [payments, setPayments] = useState([]);

  const [agreementResult, setAgreementResult] = useState(null);
  const [paymentResult, setPaymentResult] = useState(null);

  const [history, setHistory] = useState([]);

  useEffect(() => {

    fetchData();

  }, []);

  const fetchData = async () => {

    try {

      const agreementResponse = await API.get("/agreements/");

      const paymentResponse = await API.get("/payments/");

      setAgreements(agreementResponse.data);

      setPayments(paymentResponse.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  const verifyAgreement = async (agreement) => {

    try {

      const response = await API.get(

        `/agreements/verify/${agreement.id}`

      );

      const result = {

        ...response.data,

        hash: response.data.blockchain_hash,
        type: "Agreement"

      };

      setAgreementResult(result);

      setHistory((prev) => [

        result,

        ...prev

      ]);

    }

    catch (error) {

      console.log(error);

    }

  };

  const verifyPayment = async (payment) => {

    try {

      const response = await API.get(

        `/payments/verify/${payment.id}`

      );

      const result = {

        ...response.data,

        hash: response.data.blockchain_hash,
        type: "Payment"

      };

      setPaymentResult(result);

      setHistory((prev) => [

        result,

        ...prev

      ]);

    }

    catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="dashboard-content">

      <div className="page-header">

        <div>

          <h1>

            🔗 Blockchain Verification

          </h1>

          <p>

            Verify rental agreements and payment records.

          </p>

        </div>

      </div>

      {

        agreements.length > 0 &&

        <VerificationCard

          title="Agreement Verification"

          id={agreements[0].id}

          status={

            agreementResult

            ?

            agreementResult.status

            :

            "VALID"

          }

          hash={

            agreementResult?.blockchain_hash ||

            agreements[0].blockchain_hash ||

            "Not Verified Yet"

          }

          onVerify={() => verifyAgreement(agreements[0])}

        />

      }

      {

        payments.length > 0 &&

        <VerificationCard

          title="Payment Verification"

          id={payments[0].id}

          status={

            paymentResult

            ?

            paymentResult.status

            :

            "VALID"

          }

          hash={

            paymentResult?.blockchain_hash ||

            payments[0].blockchain_hash ||

            "Not Verified Yet"

          }

          onVerify={() => verifyPayment(payments[0])}

        />

      }

      <VerificationHistory

        history={history}

      />

    </div>

  );

}

export default BlockchainView;