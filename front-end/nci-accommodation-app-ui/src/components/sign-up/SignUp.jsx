import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Grid, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/Theme"

export default function SignIn() {
    let error=React.useState(false);
  return (
    <ThemeProvider theme={theme}>
    <Grid container alignItems="center" justifyContent="center"
    >
    <Paper elevation={24} style={{minHeight:"70vh",width:"80vw",display:"flex",alignItems:"space-between",justifyContent:"center"}}>
        <Grid container direction="column" alignItems="center" minHeight="70vh" width="80vw">
        <Grid item container direction="column" xs={4} md={4} spacing={2} justifyContent="center">
        Avatar
        </Grid>
        <Grid item container direction="column" xs={8} md={8} justifyContent="center" spacing={2}>
        <Grid item container justifyContent="center" spacing={2}>
        <Grid item>
        <TextField
          error={error[0]}
          id="userName"
          label="UserName"
          //defaultValue="Hello World"
        />
        </Grid>
        <Grid item>
        <TextField
          error={error[0]}
          id="password"
          label="Password"
          type="password"
        />
        </Grid>
        <Grid item>
        <TextField
          error={error[0]}
          id="retype-password"
          label="Retype Password"
          type="password"
        />
        </Grid>
        </Grid>
        <Grid item container justifyContent="center" spacing={2}>
        <Grid item>
        <TextField
          error={error[0]}
          id="emailId"
          label="Email Id"
          //defaultValue="Hello World"
        />
        </Grid>
        <Grid item justifyContent="center">
        <Button variant="contained" color="secondary">Verify</Button>
        </Grid>
        </Grid>
        <Grid item>
        <Button variant="contained" color="secondary">Sign Up</Button>
        </Grid>
   </Grid>
   </Grid>
    </Paper>
    </Grid>
    </ThemeProvider>
  );
}
