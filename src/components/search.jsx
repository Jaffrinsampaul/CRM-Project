import React, { useEffect, useState } from "react";
import { getuser } from "../Api/db";

const Search = () => {

    const [list, setlist] = useState([
    ])

    useEffect(() => {
        getuser().then((res) => {
            setlist(res)
        })
    }, [])

    const [search, setsearch] = useState("")

    const handlechange = (e) => {
        let add = e.target.value;
        setsearch(add)
    }

    const handleclick = () => {
        if (search.length > 0) {
            let x = list.filter((value) => {
                return search.match(value.firstname) || search.match(value.lastname);
            })
            setlist(x);
        }
    }

    return (
        <div>
            <input type="text" placeholder="enter firstname" onChange={handlechange} />
            <button type="button" onClick={handleclick}>submit</button>
            <input type="text" placeholder="enter lastname" onChange={handlechange} />
            <table>
                {list.map((value, index) => {
                    return <tr key={index}>
                        <td>{value.firstname}</td>
                        <td>{value.lastname}</td>
                        <td>{value.email}</td>
                        <td>{value.mobile}</td>
                    </tr>
                })}
            </table>
        </div>
    )
}

export default Search