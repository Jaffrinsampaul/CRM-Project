import React from "react"
import './CSS/navbar.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { fontSize } from "@mui/system";
const N_bar = () => {
    return (
        <div id="head">
            <div>
                <nav id="n1">
                    <span className="span"><img src={require('../image/cat.png')} />Admin</span>
                </nav>
                <nav id="n2">
                    <div className="side">
                        <InsertChartIcon className="icon"/>
                        <a href="">DashBoard</a>
                    </div>
                    <div className="side">
                        <PersonOutlineOutlinedIcon className="icon"/>
                        <a href="">Customer</a>
                    </div>
                    <div className="side">
                        <ShoppingCartOutlinedIcon className="icon" />
                        <a href="">Order</a>
                    </div>
                    <div className="side">
                        < AddBusinessOutlinedIcon  className="icon"/>
                        <a href="">Product</a>
                    </div>
                    <div className="side">
                        <InfoOutlinedIcon  className="icon"/>
                        <a href="">About</a>
                    </div>
                </nav>
            </div>
            <div>
                <nav id="nb_style">
                    <MenuIcon className="menu"/>
                    <h5>Demo </h5>
                    <GitHubIcon className="github" />
                </nav>
            </div>
        </div>
    )
}
export default N_bar