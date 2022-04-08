import axios from "axios";

export const getOrderDetails = async(table)=>{
    let order
    await(axios.get(`http://localhost:3004/${table}`)).then((res)=>{
        order = res.data
    })

    return order
}


export const deleteApi =async(table,id)=>{
    let result
    await(axios.delete(`http://localhost:3004/${table}/${id}`)).then((res)=>{
        result=  res.statusText
    })
    return result
}