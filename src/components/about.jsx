import React from "react";
import "../style/about.css"

const About=()=>{
    return(
        <section id="about">
            <h1 id="header">
                About
            </h1>
            <h4 id="subHeading">
                React CRM Demo App 2.0.0
            </h4>
            <p id="paragraph">
                This demo app is not a real application. There is no fake API as back-end service behind the scene. The advanced search in the demo doesn't work properly. Any data update (create or update record) will not be stored after hard refresh or logout. 
                The main purpose of this demo is just a proof of concept.
            </p>
        </section>
    )
}
export default About