import { ThemeProvider } from '@mui/styles';
import theme from "../themes/Theme"
import { Grid } from '@mui/material';
import UserInfo from './UserInfo'
import AccommodationUpdate from './AccommodationUpdate';
import RoomateUpdate from './RoomateUpdate';

export default function Profile(){
  let service="accomodation"; //accommodation, no-service
    return(<ThemeProvider theme={theme}>
       <Grid>
        <UserInfo/>
       </Grid>
       {service==="roomate" || "accomodation"?
        service==="accomodation" ? 
        <Grid><AccommodationUpdate></AccommodationUpdate></Grid>
        :<Grid><RoomateUpdate></RoomateUpdate></Grid>
        :null
      }
    </ThemeProvider>)
}