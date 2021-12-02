import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import theme from "../themes/Theme"
import Button from '@mui/material/Button';
import {useState} from 'react';

const useStyle=makeStyles({
    link_style:{
        textDecoration: 'none',
        color:'#FFF'
    }
})

function Header(){
    const classes=useStyle();
    const [isAvatarClick,setIsAvatarClick]=useState(false);
    return(
    <ThemeProvider theme={theme}>
    <Grid container justifyContent="space-between" 
    style={{ backgroundColor: theme.palette.primary.main,color:theme.palette.primary.light,marginBottom:"3em",marginRight:"1em"}}>
        <Grid item container xs={10} md={11} spacing={2}>
        <Grid item xs={2} md={1}>
        <Link to="/home" className={classes.link_style}><p>Home</p></Link>
            </Grid>
            <Grid item xs={3} md={1}>
            <Link to="/profile" className={classes.link_style}><p>Profile</p></Link>
            </Grid>
            <Grid item xs={2} md={1}>
            <Link to="/about" className={classes.link_style}><p>About</p></Link>
            </Grid>
            <Grid item xs={4} md={2} lg={1}>
            <Link to="/contact-us" className={classes.link_style}><p>Contact Us</p></Link>
            </Grid>
            </Grid>
            <Grid item container xs={2} md={1} justifyContent="flex-end">
            <Grid item xs={6}
            >
            <Button 
            style={{ backgroundColor: theme.palette.secondary.main,
            color:theme.palette.primary.light,minHeight:'57px'}}
            onClick={()=>{
                setIsAvatarClick((state)=>{return !state});
            }}
            >
                SK</Button>
            </Grid>
            </Grid>
        </Grid> 
        {isAvatarClick? <Grid container justifyContent="flex-end">
      <Button variant="contained">Logout</Button>
      </Grid>:null}
        </ThemeProvider>
        )
}

export default Header;