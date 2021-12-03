import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/Theme"
import Card from './Cards/AccommodationCard'
import Grid from '@material-ui/core/Grid';

export default function Profile(){
    let test=['Itachi','Uchiya','Naruto','Usumaki','Sasuke','De tara','Menato','Kushina','Jiraya','Orachi maru','Sarutobi',
    'Boruto','Hinata'];
    return(<ThemeProvider theme={theme}>
          <Grid container alignItems="center" justifyContent="center" spacing={1}>
        <Grid container alignItems="center" justifyContent="center" item xs={12} spacing={3}>
      {
       test.map((value)=>{
    return <Card 
    name={value}
    age='21'
    area='Kilikey'
    eirCode='D05'
    duration='1 Year'
    availability='Immediate'
    education='NCI Cloud Masters'
    work='Student'
    rent='500 euros'
    />
       })
      }
      </Grid>
      </Grid>
    </ThemeProvider>)
}