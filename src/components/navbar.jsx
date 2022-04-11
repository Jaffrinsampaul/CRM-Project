import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../style/navbar.css'

const NavBar =(props)=>{

    const handleChange =()=>{
        props.hiddenNav()
    }

    return(
        <section  id="navBar">
            <MenuIcon id="menu" onClick={handleChange}/>
                <h5>Demo</h5>
                <GitHubIcon id="github" />
            <section>
                
            </section>
        </section>
    )
}
export default NavBar