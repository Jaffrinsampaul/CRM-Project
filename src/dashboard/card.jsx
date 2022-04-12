import React, { useEffect } from "react";
// import '../styles/card.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import "../dashboard/card.css"

const SmallCard = (props) => {
    
    return(
        <Grid item xs={3} id="cardBox">
            <Card sx={{ display: 'flex'}} >
                <Box sx={{ backgroundColor: props.value.bgcolor, color: 'white', padding:4 }}>
                    {props.value.icon}
                </Box>
                <Box >
                    <CardContent style={{width: "fit-content"}}>
                        <Typography component="p" variant="h6">
                            {props.value.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="p">
                            {props.value.value}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Grid>
    )
}

export default SmallCard;