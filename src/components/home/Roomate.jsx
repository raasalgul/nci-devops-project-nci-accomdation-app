import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/Theme"
import Card from './Cards/RoomateCard'
import Grid from '@material-ui/core/Grid';
import {UserInfoContext} from "../../App"
import { useContext,useEffect, useState } from 'react';
import axios from 'axios';

export default function Profile(){
  const userInfoContext = useContext(UserInfoContext)
  const [roommateData,setroommateData]=useState([]);
    useEffect(()=>{
      axios.get('http://localhost:8089/roommate/retrieve')
      .then(res=>{
        console.log(res.data)
        setroommateData(res.data)
      })
      },[]
      )
    return(<ThemeProvider theme={theme}>
          <Grid container alignItems="center" justifyContent="center" spacing={1}>
        <Grid container alignItems="center" justifyContent="center" item xs={12} spacing={3}>
      {
       roommateData.map((value)=>{
    return <Card 
    name={'Not yet'}
    age={'Not yet'}
    area={value.area.join(",")}
    eirCode={value.eirCode.join(",")}
    duration={value.duration}
    availability={value.availability}
    education={value.education}
    work={value.work}
    budget={value.budget}
    />
       })
      }
      </Grid>
      </Grid>
    </ThemeProvider>)
}