import React from "react";
import { useEffect } from "react";
import { getOrderDetails } from "../api/tableDetails";

const Form =()=>{
    
    useEffect(()=>{
        getOrderDetails()
    })

    return(
        <section>
            <h1>Customer</h1>
            <section>

            </section>
        </section>
    )
}

export default Form