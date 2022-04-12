import React from "react";

import NavBar from "./navBar";
import "../style/login.css"
import {styles} from "../style/btnStyle"

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from "react";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login =()=>{

    const Navigate = useNavigate()

    const [loginDetails, setLoginDetails]= useState({
        userName:"",password:""
    })

    useEffect(()=>{
        if(localStorage.getItem("loginSuccess")){
            Navigate("/dashboard")
        }
    })
    const handleChange =(e, label)=>{
        const loginKey = e.target.name
        const loginValue = e.target.value

        setLoginDetails({...loginDetails, [loginKey]:loginValue})
    }

    const handleSubmit =()=>{
        if(loginDetails.userName === "admin@gmail.com" && loginDetails.password === "admin@123"){
            Navigate("/dashboard")
            localStorage.setItem("loginSuccess", true)
        }
        
    }

    return(
        <section>
            <NavBar/>
                <h1 id="welcomeTag">Welcome To Login Page</h1>
                <section id="loginCard">
                    <Stack spacing={2} direction="column">
                        <TextField id="outlined-basic" 
                            label="Email" variant="outlined" 
                            style={styles.inputFields}
                            name="userName"
                            onChange ={handleChange}
                        />

                        <TextField id="outlined-basic" 
                            label="password" variant="outlined"
                            name="password"
                            style={styles.inputFields} type={"password"}
                            onChange ={handleChange}
                        />
                        {
                            loginDetails.userName!=="" && loginDetails.password!=="" 
                                ?<Button variant="contained" style={styles.LoginBtn} onClick={handleSubmit}>Contained</Button>
                                :<Button variant="contained" disabled={true} style={styles.LoginBtn}>Contained</Button>
                        }
                    </Stack>
                </section>
        </section>
    )
}

export  default Login