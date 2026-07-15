import "./Technology.css";

import {

FaReact,

FaPython,

FaDatabase,

FaGithub

} from "react-icons/fa";

function Technology(){

return(

<section className="technology-section" id="technology">

<h2>

Technology Stack

</h2>

<div className="tech-grid">

<div className="tech-card">

<FaReact/>

<h3>React</h3>

</div>

<div className="tech-card">

<FaPython/>

<h3>FastAPI</h3>

</div>

<div className="tech-card">

<FaDatabase/>

<h3>PostgreSQL</h3>

</div>

<div className="tech-card">

<FaGithub/>

<h3>GitHub</h3>

</div>

</div>

</section>

);

}

export default Technology;