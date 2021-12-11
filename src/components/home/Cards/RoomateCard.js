import React, { useState } from "react";
import { Paper,Grid, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../themes/Theme"
import {serviceURLHost} from "../../constants/Constant"
import authHeader from '../../services/auth-header';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert'; 

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(1),
      margin: 25,
      fontFamily: "'Roboto",
      backgroundColor: "#CCCCCC",
      color: "#1C80B5",
      fontSize: 9
    },
    image:{
        width:250,
        height:300
    },
    heading:{
         color: "rgba(0, 0, 0, 0.54)",
    },
    right:{
        margin:'10px',
        minWidth:'200px',
        maxWidth:'200px'
    },
    button:{
        textAlign:"-webkit-right"
    }
  }));
  export default function Card(props)  {
    const [isEmailSent,setIsEmailSent] = useState(false); 
    const [isSuccess,setIsSuccess] = useState(false) 
    const classes = useStyles();
    return (
      <ThemeProvider theme={theme}>
        <Paper className={classes.paper}
        >
       <Grid
      justify="space-between"
      container 
      spacing={24}
      >
        <Grid item>
        <img src={"data:image/png;base64,"+props.picture.data} className={classes.image} alt="logo" />
        <h1><span className={classes.heading}>{props.name}</span></h1>
        </Grid>
        <Grid item>
            <div className={classes.right}>
          <h1><span className={classes.heading}>Age: </span>{props.age}</h1>
          <h1><span className={classes.heading}>Area: </span>{props.area}</h1>
          <h1><span className={classes.heading}>EIRCode: </span>{props.eirCode}</h1>
          <h1><span className={classes.heading}>Duration: </span>{props.duration}</h1>
          <h1><span className={classes.heading}>Education: </span>{props.education}</h1>
          <h1><span className={classes.heading}>Work: </span>{props.work}</h1>
          <h1><span className={classes.heading}>Budget: </span>{props.budget}</h1>
          <Grid
          className={classes.button}
          >
          <Button variant="contained"
          color="secondary"
          onClick={ async()=>{
            let header={...authHeader(),'Content-Type':'application/json'}
              const response = await fetch(`${serviceURLHost}/nci/user/send-email`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: header,
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: props.userId          
              });
              return await response.json().then(()=>{
                setIsEmailSent(true)
                setIsSuccess(true)
              }).catch(()=>{
                setIsEmailSent(true) 
                setIsSuccess(false)
              });
            }
            } 

          >
              Intrested
        </Button>
        </Grid>
          </div>
          </Grid>
          </Grid>
        </Paper>
        <Snackbar open={isEmailSent & isSuccess} autoHideDuration={6000} onClose={()=>{setIsEmailSent(false)}}>
       <Alert onClose={()=>{ setIsEmailSent(false)}} severity="success" sx={{ width: '100%' }}>
        {'Email Sent Successfully'}
       </Alert>
      </Snackbar>
      <Snackbar open={isEmailSent & !isSuccess} autoHideDuration={6000} onClose={()=>{ setIsEmailSent(false)}}>
       <Alert onClose={()=>{ setIsEmailSent(false)}} severity="error" sx={{ width: '100%' }}>
        {'Email failed'}
       </Alert>
      </Snackbar> 
      </ThemeProvider>
    );
  }