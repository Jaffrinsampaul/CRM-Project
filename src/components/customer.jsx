import React, { useState, useEffect } from "react";
import { CustomerList } from "../api/customer_api";
import '../styles/customer.css';


const Customer = (props) => {

    const [customer, setCustomer] = useState([]);

    useEffect(
        () => {
            CustomerList().then((res)=>{setCustomer(res)}).catch((err)=>{console.log(err)});
        },[]
    )

    return(
        <section>
            <h1>Customers({customer.length})</h1><hr />
            <table id="customers">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                {customer.map((elem,index) => {
                    return(
                    <tr key={index}>
                    <td>{elem.firstname}</td>
                    <td>{elem.lastname}</td>
                    <td>{elem.email}</td>
                    <td>{elem.mobile}</td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </section>
    )
}

export default Customer;







