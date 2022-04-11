import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Sidebar from "./sideBar";

const LandingPage =()=>{
    return (
        <section>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Sidebar tableDetail="products"/>}/>
                    <Route path="/dashboard" element={<Sidebar tableDetail="products"/>}/>
                    <Route path="/product" element={<Sidebar tableDetail="products"/>}/>
                    <Route path="/customer" element={<Sidebar tableDetail="customers"/>}/>
                    <Route path="/order" element={<Sidebar tableDetail="orders"/>}/>
                </Routes>
            </BrowserRouter>
        </section>
    )
}

export default LandingPage