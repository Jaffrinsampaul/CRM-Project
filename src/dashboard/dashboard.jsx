import React, { useState } from "react";
import SmallCard from "./card";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FaceIcon from '@mui/icons-material/Face';
import OrderChart from "./order";
import SalesChart from "./sales";
import WebSiteChart from "./analysis";
import BrowserChart from "./browser";
import { Grid } from "@mui/material";


const DashBoard = (props) => {

    const [data, setData] = useState([
        {
            name: "Total Profit",
            value: "1500k",
            icon: <ShoppingCartIcon sx={{fontSize:"40px"}}/>,
            bgcolor: "#D81B60"
        },
        {
            name: "Likes",
            value: "2341",
            icon: <ThumbUpIcon sx={{fontSize:"40px"}}/>,
            bgcolor: "#00ACC1"
        },
        {
            name: "Sales",
            value: "460",
            icon: <AssessmentIcon sx={{fontSize:"40px"}}/>,
            bgcolor: "#8E24AA"
        },
        {
            name: "New Members",
            value: "268",
            icon: <FaceIcon sx={{fontSize:"40px"}}/>,
            bgcolor: "#FB8C00"
        }
    ])

    return(
        <div>
            <Grid container spacing={3}>
    
                {data.map((elem) => {
                    // console.log(elem);
                    return <SmallCard value = {elem}/>
                })}
           
                <Grid item xs={6}>
                    <OrderChart />
                </Grid>
                <Grid item xs={6}>
                    <SalesChart />
                </Grid>
                <Grid item xs={6}>
                    <WebSiteChart />
                </Grid>
                <Grid item xs={6}>
                    <BrowserChart />
                </Grid>
            </Grid>
        </div>
    )
}

export default DashBoard;


