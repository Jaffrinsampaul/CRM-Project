import { colors } from "./color"

export const styles ={
    fabBtnEdit:{
        marginRight: "1rem",
        color: colors.white,
        backgroundColor: colors.lightGreen,
    },
    fabtnDelete :{
        marginRight: ".5rem",
        backgroundColor: colors.darkGrey,
        color: colors.lightGrey,
    },
    fabtnDeleteIcon:{
        marginTop: "5px"
    },
    fabBtnSearch:{
        marginRight: "3.5rem",
        backgroundColor: colors.lightBlue,
    },
    fabBtnAdd:{
        backgroundColor: colors.lightPink,
        color: colors.white,
    },
    pagination:{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        bottom: 0,
        alignItems: "center",
        left: "35%"
    },
    filterList:{
        color: "#f44336",
        marginTop: "5px",
        marginLeft: "10px"
    },
    inputFields:{
        width: "70%",
        marginTop: "50px",
        marginLeft: "10px",

        position : "relative",
        left: "15%",
    },
    LoginBtn:{
        width: "50%",
        marginLeft: "10px",
        marginBottom: "20px",
        color: colors.white,
        
        position : "absolute",
        left: "25%",
        bottom: "30px"
    },
    // agre
}