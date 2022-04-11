// import React, { useState, useEffect } from "react";
// import { CustomerList } from "../api/customer_api";
// import '../styles/customer.css';


// const Customer = (props) => {

//     const [customer, setCustomer] = useState([]);

//     useEffect(
//         () => {
//             CustomerList().then((res)=>{setCustomer(res)}).catch((err)=>{console.log(err)});
//         },[]
//     )

//     return(
//         <section>
//             <h1>Customers({customer.length})</h1><hr />
//             <table id="customers">
//                 <thead>
//                     {customer.map((obj,index) => {
//                         if(index === 0){
                            
//                             return(
//                                 <tr>
//                                 {Object.keys(obj).map((objKeys)=>{
//                                     if(objKeys !== "id"){
//                                     return <th>{objKeys}</th>
//                                     }
//                                 })}
//                                 </tr>
//                             )
                            
//                         }
//                     })}
//                 </thead>
//                 <tbody>
//                 {customer.map((obj,index) => {
//                     return(
//                     // <tr key={index}>
//                     // <td>{elem.firstname}</td>
//                     // <td>{elem.lastname}</td>
//                     // <td>{elem.email}</td>
//                     // <td>{elem.mobile}</td>
//                     // </tr>
//                     Object.keys(obj).map((objKeys)=>{
//                         if(objKeys !== "id"){
//                             return <td>{obj[objKeys]}</td>
//                         }
//                     })
//                     )
//                 })}
//                 </tbody>
//             </table>
//         </section>
//     )
// }

// export default Customer;







