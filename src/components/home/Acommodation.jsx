import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/Theme"
import Card from './Cards/AccommodationCard'
import Grid from '@material-ui/core/Grid';
import {UserInfoContext} from "../../App"
import { useContext,useEffect, useState } from 'react';
import authHeader from '../services/auth-header';
import {serviceURLHost} from "../constants/Constant"

export default function Profile(){
  const userInfoContext = useContext(UserInfoContext)
  const [accommodationData,setAccommodationData]=useState([]);
    useEffect(()=>{
      // axios.get('http://localhost:8089/accomodation/retrieve')
      // .then(res=>{
      //   console.log(res.data)
      //   setAccommodationData(res.data)
      // })
      fetch(`${serviceURLHost}/nci/accomodation/retrieve`,{ headers: authHeader() }).then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson[0].picture.data)
        setAccommodationData(myJson);
       // setLoad(true);
        });
       },[]
       )
    return(<ThemeProvider theme={theme}>
          <Grid container alignItems="center" justifyContent="center" spacing={1}>
        <Grid container alignItems="center" justifyContent="center" item xs={12} spacing={3}>
      {
       accommodationData.map((value)=>{
    return <Card
    name={"must get"}
    age={"must get"}
    area={value.area}
    eirCode={value.eirCode}
    duration={value.duration}
    availability={value.availablity}
    education={value.education}
    work={value.work}
    rent={value.rent}
    picture={value.picture}
    // userId={userInfoContext.userInfoState.userId}
    />
       })
      }
      </Grid>
      </Grid>
    </ThemeProvider>)
}