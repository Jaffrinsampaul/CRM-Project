import React, { useState } from "react";
import CustomerForm from "./forms";
import { Grid } from "@mui/material";


const AddCustomer = (props) => {
    const [data, setData] = useState([
        {
            // id:"outlined-basic",
            label:"First Name*",
            placeholder:"First Name",
            // variant:"outlined"
            // helperText:"Required",
        },
        {
            label:"Last Name*",
            placeholder:"Last Name"
        },
        {
            label:"Rewards*",
            type:"number",
            defaultValue:0
        },
        {
            label:"Email*",
            type:"email",
            placeholder:"Email"
        },
        {
            label:"Mobile*",
            placeholder:"555-555-555"
        }
    ])
    const [value, setValue] = useState([
        {
            label:"Category",
            placeholder:"First Name",
        },
        {
            label:"Product*",
            placeholder:"Product",
        },
        {
            label:"Price*",
            type:"number",
            defaultValue:0
        },
        {
            label:"Quantity*",
            type:"number",
            defaultValue:0
        }
        
    ])
    return(
    <>      <Grid container spacing={3}>
                {data.map((elem) => {
                    return <CustomerForm pdata={elem}/>
                })}
            </Grid>
            <Grid container spacing={3}>
                {value.map((val) => {
                    return <CustomerForm ppdata={val}/>
                })}
            </Grid>
        </>
    )
}
export default AddCustomer;