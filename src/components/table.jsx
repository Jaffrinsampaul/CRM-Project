import {React,useEffect, useState } from "react";
import "../style/table.css"
import { deleteApi, getOrderDetails } from "../api/tableDetails";

import {styles} from "../style/btnStyle"

import { Fab } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import { Pagination } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteAlert from "./delete";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const TableDisplay =(props)=>{

    const [order, setOrder] =useState([])
    const [page, setPage]= useState(1)
    const [noOfPages ,setNoofPage] = useState();
    const [isReload, setReload] =useState(false)
    
    const itemPerPage = 7
    const fetchTableData = props.tableDetail
    const istrue = props.isTrue

    useEffect(()=>{
        
        getOrderDetails(fetchTableData).then((res)=>{
            setOrder(res)
            setNoofPage(Math.ceil(res.length/itemPerPage))
        })
        setReload(false)
        
    }, [fetchTableData, isReload === true])


    const handlePagination =(ent, value)=>{
        setPage(value)
    }

    const handleDelete =(e, value)=>{
        // deleteApi(fetchTableData,value).then((res)=>{

        //     if(res === "OK"){
        //         setReload(true)
        //     }
        // })
        DeleteAlert()
    }

   <BrowserRouter>
    <Routes>
        <Route path= {`/${fetchTableData}/deleteAlert`} element={<DeleteAlert />} />
    </Routes>
   </BrowserRouter>

    return(
        <section >
            {
                <section id={ istrue === "true"? "containerTrue": "container" }>

                <h1>{fetchTableData.charAt(0).toUpperCase() + fetchTableData.slice(1)} ({order.length})</h1>

                <table id="table">
                    <thead>
                        {
                            order.map((obj, index)=>{
                                if(index === 0){
                                return <tr key={index}>
                                    <th>Gender</th> 
                                    {
                                        Object.keys(obj).map((objKeys ,index1)=>{

                                            if(objKeys !== "id"){
                                                return <th key={index1}>{objKeys.charAt (0).toUpperCase()+objKeys.slice(1)}</th>
                                            }
                                        })
                                    }
                                    <th colSpan={2}>Action</th> 
                                </tr>
                                }
                            })
                        }
                    </thead>
                    <tbody>
                        {
                            order.slice((page - 1) * itemPerPage, page * itemPerPage).map((obj, index)=>{

                                return <tr  id="tableDetails" key={index}>
                                    <td><PersonIcon/></td>
                                    {
                                        Object.keys(obj).map((Objkey, index1)=>{
                                            if(Objkey !== "id"){
                                                return <td key={index1}>{obj[Objkey]}</td>
                                            } 
                                        })
                                    }
                                    <td>
                                        <Fab size="small"  style={styles.fabBtnEdit}><CreateIcon value= {obj["id"]} id ="btn1"/></Fab>
                                        <Fab size="small" style={styles.fabtnDelete}><DeleteIcon value= {obj["id"]} id ="btn2" 
                                            onClick ={(e)=>{handleDelete(e, obj["id"])}} 
                                            // onClick={<DeleteAlert/>}
                                        /></Fab>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                    <Pagination 
                            count={noOfPages}
                            page={page}
                            defaultPage={1} 
                            style={styles.pagination} 
                            onChange={handlePagination}
                    />
                </table>
                    
                <section id="fixedContainer">
                    <Fab size="small" style={styles.fabBtnSearch}><SearchIcon/></Fab>
                    <Fab size="small" style={styles.fabBtnAdd}><AddIcon/></Fab>
                </section>
            </section>
            }
            
        </section>
    )
}

export default TableDisplay