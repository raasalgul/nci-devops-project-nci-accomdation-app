import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/Theme"
import Card from './Cards/AccommodationCard'
import Grid from '@material-ui/core/Grid';
import {UserInfoContext} from "../../App"
import { useContext,useEffect, useState } from 'react';
import axios from 'axios';

export default function Profile(){
  const userInfoContext = useContext(UserInfoContext)
  const [accommodationData,setAccommodationData]=useState([]);
    useEffect(()=>{
      axios.get('http://localhost:8089/accomodation/retrieve')
      .then(res=>{
        console.log(res.data)
        setAccommodationData(res.data)
      })
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
    // userId={userInfoContext.userInfoState.userId}
    />
       })
      }
      </Grid>
      </Grid>
    </ThemeProvider>)
}