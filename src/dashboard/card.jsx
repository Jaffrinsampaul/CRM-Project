import React, { useEffect } from "react";
// import '../styles/card.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import { Grid } from "@mui/material";

const SmallCard = (props) => {
    useEffect(() => {
        console.log(props);
    },[])
    return(
        <Grid item xs={3}>
            <Card sx={{ display: 'flex'}}>
                <Box sx={{ backgroundColor: props.value.bgcolor, color: 'white', padding:4 }}>
                    {props.value.icon}
                </Box>
                <Box>
                    <CardContent>
                        <Typography component="h3" variant="h5">
                            {props.value.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="p">
                            {props.value.value}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>


                {/* <div className="grid-container"> 
                    <div className="grid-item">
                            <span style={{backgrounColor: props.value.bgcolor}}>{props.value.icon}</span>
                            <div>
                                <h3>{props.value.name}</h3>
                                <p>{props.value.value}</p>
                            </div>
                    </div>
                </div> */}
        </Grid>
    )
}

export default SmallCard;