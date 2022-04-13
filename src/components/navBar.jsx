import {React, useState } from "react"
import '../style/navbar.css'
import { Link } from "react-router-dom";

import GitHubIcon from '@mui/icons-material/GitHub';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import TableDisplay from "./table";


const NavBar = (props) => {

    const [fullNav, setFullNav] =useState(true)

    const tableDetail = props.tableDetail

    const pageRouting =[
        
        {Path:"/dashboard", fileName: "Dashboard", icons:  <InsertChartIcon className="iconBtn"/>},
        {Path:"/product", fileName: "Product", icons: <PersonOutlineOutlinedIcon className="iconBtn"/>},
        {Path:"/customer", fileName: "Customer", icons: <ShoppingCartOutlinedIcon className="iconBtn" />},
        {Path:"/order", fileName: "Order", icons: < AddBusinessOutlinedIcon  className="iconBtn"/>},
        
    ]

    const handleNavBarChange =()=>{
        if(fullNav === false){
            setFullNav(true)
        }
        else{
            setFullNav(false)
        }
    }

    return (
        <section id="parentDiv">
            {
                fullNav === false?
                <>
                    <div style={{height: "100vh", width: "250px"}}>

                        <nav id="sideBarHeader">
                            <span className="sideBarHeaderBgd">
                                <img src={require('../asset/cat.png')} alt="Profile"/>
                                Admin
                            </span>
                        </nav>

                        <nav id="sideBarBody">
                            {
                                pageRouting.map((obj, index)=>{
                                    return <section className="sideBarContent">
                                        <>{obj.icons}</>
                                        <Link className="achorTag" to={obj.Path} key={index}>{obj.fileName}</Link>
                                    </section> 
                                })
                            }
                        </nav>
                    </div>
                    <div>

                        <section id="navBar">
                            <MenuIcon id="menu" onClick={handleNavBarChange}/>
                            <h5>Demo</h5>
                            <GitHubIcon id="github" />
                        </section>
                        <TableDisplay tableDetail={tableDetail}/>
                    </div>
                </>
                :
                <>
                    <section id ="isTrueStyle">
                        <section id="navBarTrue">
                            <MenuIcon id="menu" onClick={handleNavBarChange}/>
                            <h5>Demo</h5>
                            <GitHubIcon id="github" />
                        </section>
            </section>
    )

    // return(
    //     <section>
    //         <section id="navBar">
    //             <MenuIcon id="menu" onClick={handleNavBarChange}/>
    //             <h5>Demo</h5>
    //             <GitHubIcon id="github" />
    //         </section>
    //         <Sidebar/>
    //             {/* // <TableDisplay tableDetail={tableDetail}/> */}
    //     </section>
    // )
}
export default NavBar