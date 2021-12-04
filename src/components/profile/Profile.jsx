import { ThemeProvider } from '@mui/styles';
import theme from "../themes/Theme"
import { Grid } from '@mui/material';
import UserInfo from './UserInfo'
import AccommodationUpdate from './AccommodationUpdate';
import RoomateUpdate from './RoomateUpdate';

export default function Profile(){
  let service="accomodation"; //accommodation, no-service
    return(<ThemeProvider theme={theme}>
      <Grid container direction="column" spacing={2}>
       <Grid item xs={5}>
        <UserInfo/>
       </Grid>
       {service==="roomate" || "accomodation"?
        service==="accomodation" ? 
        <Grid item xs={5}><AccommodationUpdate></AccommodationUpdate></Grid>
        :<Grid item xs={5}><RoomateUpdate></RoomateUpdate></Grid>
        :null
      }
      </Grid>
    </ThemeProvider>)
}