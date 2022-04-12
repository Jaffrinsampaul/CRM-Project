
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ResponsiveDialog from "./delete";
import Login from "./login";
import Sidebar from "./sideBar";

const LandingPage =()=>{
    return (
        <section>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/dashboard" element={<Sidebar tableDetail="dashboard"/>}/>
                    <Route path="/product" element={<Sidebar tableDetail="products"/>}/>
                    <Route path="/customer" element={<Sidebar tableDetail="customers"/>}/>
                    <Route path="/order" element={<Sidebar tableDetail="orders"/>}/>
                    <Route path="/about" element={<Sidebar tableDetail= "about"/>}/>
                  

                </Routes>
            </BrowserRouter>
        </section>
    )
}

export default LandingPage