import React from "react";

const AddCustomer = (props) => {

    const [data, setData] = []; 

    const handleChange = (e) =>{
        
    }

    return(
        <>
            <label htmlFor=""></label>
            <input type="text" placeholder="First Name*" onChange={handleChange}/>
            <input type="text" placeholder="Last Name"/>
            <input type="number" value={0}/>
            <input type="email" placeholder="Email*"/>
            <input type="text" placeholder="Mobile*"/>

        </>
    )
}

export default AddCustomer;