import { FaPlus } from "react-icons/fa";
import "../styles/PageHeader.css";

function PageHeader({

  title,
  subtitle,
  buttonText,
  onButtonClick

}) {

  return (

    <div className="page-header">

      <div className="page-title">

        <h1>{title}</h1>

        <p>{subtitle}</p>

      </div>

      {

        buttonText && (

          <button

            type="button"

            className="primary-btn"

            onClick={onButtonClick}

          >

            <FaPlus />

            <span>{buttonText}</span>

          </button>

        )

      }

    </div>

  );

}

export default PageHeader;