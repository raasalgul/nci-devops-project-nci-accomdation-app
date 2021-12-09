import { ThemeProvider,makeStyles } from '@mui/styles';
import theme from "../themes/Theme"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import {useState,useEffect,useContext} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Grid, IconButton, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {UserInfoContext} from "../../App"
import authHeader from '../services/auth-header';
import {serviceURLHost} from "../constants/Constant"

const useStyles = makeStyles({
    root: {
      minWidth: 444,
      alignContent:'center'
    },
    textFields:{
      marginLeft:20
    }
  });
  

export default function UserInfo(){
  const [isEdit,setIsEdit]=useState(true);
  const userInfoContext = useContext(UserInfoContext)
  async function onSave() {
    let requestData={...data};
    requestData.age=age;
    requestData.course=course;
    requestData.services=service;
    console.log(course)
    console.log(requestData)
    requestData.phoneNumber=phoneNumber;
    let header={...authHeader(),'Content-Type':'application/json'}
    const response = await fetch(`${serviceURLHost}/nci/user/put-info`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: header,
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(requestData) // body data type must match "Content-Type" header
    });
    return await response.json().then(()=>{
     setData(data)
     setAge(data.age)
     setCourse(data.course)
     setService(data.service)
     setPhoneNumber(data.phoneNumber)
     setIsEdit((previous)=>!previous)
    }); // parses JSON response into native JavaScript objects
  }

  useEffect(()=>{
  fetch(`${serviceURLHost}/nci/user/get-info`,{ headers: authHeader() }).then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson)
    setData(myJson);
    setService(myJson.services)
    setAge(myJson.age)
    setCourse(myJson.course)
    setPhoneNumber(myJson.phoneNumber)
    userInfoContext.userInfoDispatch({type:'userState',payload:{...userInfoContext.userInfoState,"service":myJson.services}})
    });
    },[isEdit]
    )
    const [data,setData]= useState({});
    const [service, setService] = useState('');
    const [age, setAge] = useState('');
    const [course, setCourse] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const classes = useStyles();
    return(<ThemeProvider theme={theme}>
          <Card className={classes.root} variant="outlined">
         <CardContent>
           
           <div style={{display: 'block',marginLeft: 'auto',width: '54%'}}>
         <Avatar style={{width:100,height:100}} src="/broken-image.jpg" />
         <Grid>
           {isEdit?
           <IconButton onClick={()=>{setIsEdit((previous)=>!previous)}}>
             <EditIcon>
               </EditIcon>
               </IconButton>:
               <Grid>
               <Button variant="contained" style={{backgroundColor:"#2EC4B6", marginRight:"5px"}} 
               onClick={onSave}>Save</Button>
               <Button variant="contained" style={{backgroundColor:"#2EC4B6"}} onClick={()=>{setIsEdit((previous)=>!previous)}}>Cancel</Button>
               </Grid>
               }
               </Grid>
         </div>
        <br/><br/>
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Name:</Typography>
          {/* {isEdit? */}
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.username}</Typography>
           {/* : <TextField value={data.username} className={classes.textFields}></TextField> */}
          {/* null */}
          {/* } */}
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Age:
          </Typography> 
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.age}</Typography>:
          <TextField value= {age} onChange={(e)=>{setAge(e.target.value)}} ></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Course:
          </Typography>
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.course}</Typography>:
          <TextField value= {course} onChange={(e)=>{setCourse(e.target.value)}}></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Service:
          </Typography> 
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{service}</Typography>:
          <Select
          value={service}
          onChange={(event)=>{setService(event.target.value)
          userInfoContext.userInfoDispatch({type:'userState',payload:{...userInfoContext.userInfoState,"service":event.target.value}})
          }}
        >
          <MenuItem value={'Roommate'}>Roommate</MenuItem>
          <MenuItem value={'Accommodation'}>Accommodation</MenuItem>
          <MenuItem value={'No service'}>No Service</MenuItem>
        </Select>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Phone number:
          </Typography>
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.phoneNumber}</Typography>:
          <TextField value= {phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Email Id:
          </Typography> <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.email}</Typography>
      </CardContent>
    </Card>
    </ThemeProvider>)
}