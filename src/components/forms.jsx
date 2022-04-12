import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';


const CustomerForm = (props) => {

    useEffect(()=>{
        // console.log(props.pdata);
    },[])

    return(
        <>
        <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '40ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Grid item xs={4}>
                <TextField
                    label={props.pdata.label}
                    placeholder={props.pdata.placeholder}
                    helperText={props.pdata.helperText}
                    type={props.pdata.type}
                    defaultValue={props.pdata.defaultValue}
                />
            </Grid>
        </Box>
        <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '40ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Grid item xs={4}>
                <TextField
                    label={props.ppdata.label}
                    placeholder={props.ppdata.placeholder}
                    helperText={props.ppdata.helperText}
                    type={props.ppdata.type}
                    defaultValue={props.ppdata.defaultValue}
                />
            </Grid>
        </Box>
        </>
    )
}

export default CustomerForm;