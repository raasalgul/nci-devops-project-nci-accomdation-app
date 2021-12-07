import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Grid, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/Theme"
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useContext,useEffect,useState } from 'react';
import AuthService from "../services/auth.service";
const useStyle=makeStyles({
  link_style:{
      textDecoration: 'none',
      color:'#FFF'
  }
})
export default function SignIn(props) {

  const [username, setUsername] = useState('');
  const [password,setPassword]=useState('');
  const [retypePassword,setRetypePassword]=useState('');
  const [email,setEmail]=useState('');
    let error=React.useState(false);
    const classes=useStyle();

    function handleSubmit(){
      AuthService.register(username,password,email).then(
        (res) => {
          console.log(res)
          props.history.push("/sign-in");
         // window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
            // setMessage(resMessage);
            // setLoading(false);
        }
      );
    }
  return (
    <ThemeProvider theme={theme}>
    <Grid container alignItems="center" justifyContent="center"
    >
    <Paper elevation={24} style={{flexWrap:"nowrap",minHeight:"50vh",width:"40vw",display:"flex",alignItems:"space-between",justifyContent:"center",paddingTop:"18px"}}>
       <Grid container direction="column">
        <Grid item container direction="column" justifyContent="center" spacing={2}>
        <Grid item>
        <TextField
          error={error[0]}
          id="userName"
          label="Username"
          onChange={(e)=>{
            setUsername(e.target.value)
          }}
          //defaultValue="Hello World"
        />
        </Grid>
        <Grid item>
        <TextField
          error={error[0]}
          id="password"
          label="Password"
          type="password"
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
        />
        </Grid>
        <Grid item>
        <TextField
          error={error[0]}
          id="retype-password"
          label="Retype Password"
          type="password"
          onChange={(e)=>{
            setRetypePassword(e.target.value)
          }}
        />
        </Grid>
        <Grid item>
        <TextField
          error={error[0]}
          id="emailId"
          label="Email Id"
          //defaultValue="Hello World"
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
        />
        </Grid>
        <Grid item container justifyContent="center" spacing={1}>
        {/* <Grid item>
        <TextField
          error={error[0]}
          id="mobile"
          label="Mobile No"
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          //defaultValue="Hello World"
        />
        </Grid> */}
        {/* <Grid item justifyContent="center" alignSelf="center">
        <Button variant="contained" color="secondary">Send Code</Button>
        </Grid>
        </Grid>
        <Grid item container justifyContent="center" spacing={1}>
        <Grid item>
        <TextField
          error={error[0]}
          id="code"
          label="Code"
          //defaultValue="Hello World"
        />
        </Grid> */}
        {/* <Grid item justifyContent="center" alignSelf="center">
        <Button variant="contained" color="secondary">Verify</Button>
        </Grid>*/}
        </Grid> 
        <Grid item>
        <Button variant="contained" onClick={handleSubmit} style={{marginRight:"8px"}} color="secondary">Submit</Button>
        <Link to="/sign-in" className={classes.link_style}>
        <Button variant="contained" color="secondary" >Login</Button>
        </Link>
        </Grid>
   </Grid>
   </Grid>
    </Paper>
    </Grid>
    </ThemeProvider>
  );
}
