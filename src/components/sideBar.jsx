import {React, useState } from "react"
// import "../style/sideBar.css"
import { Link, useNavigate } from "react-router-dom";

import TableDisplay from "./table";
import DashBoard from "../dashboard/dashboard";
import NavBar from "./navBar";
import  {styles} from "../style/btnStyle"
import { Devolpment } from "./devlopment";

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import About from "./about";
import { useEffect } from "react";



const Sidebar = (props) => {

    const [isShowNav, setIsShowNav] =useState(true)
    const [logOut, setLogOut] =useState(false)
    const Navigate = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem("loginSuccess")){
            Navigate("/")
        }
    },[logOut])

    const tableDetail = props.tableDetail

    const pageRouting =[
        
        {Path:"/dashboard", fileName: "Dashboard", icons:  <InsertChartIcon className="iconBtn"/>},
        {Path:"/product", fileName: "Product", icons: <PersonOutlineOutlinedIcon className="iconBtn"/>},
        {Path:"/customer", fileName: "Customer", icons: <ShoppingCartOutlinedIcon className="iconBtn" />},
        {Path:"/order", fileName: "Order", icons: < AddBusinessOutlinedIcon  className="iconBtn"/>},
        {Path:"/about", fileName: "About", icons: < InfoOutlinedIcon  className="iconBtn"/>},
        
    ]

    const handleNavBarChange =()=>{
        if(isShowNav === false){
            setIsShowNav(true)
        }
        else{
            setIsShowNav(false)
        }
    }

    const handelLogout =()=>{
       localStorage.removeItem("loginSuccess", false)
       alert("Thanks Visiting")
       setLogOut(true)
    }
    
    return(
        <section  >{
            isShowNav === true?<section id="navBarContanier">
                <div style={{height: "100vh", width: "250px"}}>
                    <nav id="sideBarHeader">
                    <span className="sideBarHeaderBgd">
                            <img src={require('../asset/cat.png')} alt="Profile"/>
                            Admin
                            <FilterListRoundedIcon style={styles.filterList} onClick={handelLogout}/>
                        </span>
                    
                    </nav>

                    <nav id="sideBarBody">
                        {
                            pageRouting.map((obj, index)=>{
                                return <section key={index} className="sideBarContent">
                                    <>{obj.icons}</>
                                    <Link className="achorTag" to={obj.Path} key={index}>{obj.fileName}</Link>
                                </section> 
                            })
                        }
                    </nav>
                </div>
                <section id="testStyle">
                    <NavBar hiddenNav = {handleNavBarChange}/>
                    {
                        tableDetail==="dashboard"?<DashBoard/>: tableDetail ==="about"? <About/>:<TableDisplay tableDetail={tableDetail}/>
                    }
                   
                   {/* <TableDisplay tableDetail={tableDetail}/> */}
                </section>
            </section>:
                <section>
                    <NavBar hiddenNav = {handleNavBarChange}/>
                    {
                        tableDetail==="dashboard"?<DashBoard/>: tableDetail ==="about"? <About/>:<TableDisplay tableDetail={tableDetail}/>
                    }
                    {/* <TableDisplay tableDetail={tableDetail}/> */}
                </section>
                    
            
        }
                
        </section>
    )
}
export default Sidebar