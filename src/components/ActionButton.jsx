import {

FaEye,

FaEdit,

FaTrash

} from "react-icons/fa";

import "./ActionButtons.css";

function ActionButtons(){

return(

<div className="table-actions">

<button className="view">

<FaEye/>

</button>

<button className="edit">

<FaEdit/>

</button>

<button className="delete">

<FaTrash/>

</button>

</div>

);

}

export default ActionButtons;