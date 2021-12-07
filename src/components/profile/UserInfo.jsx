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
  const [data,setData]= useState({});
  const [isEdit,setIsEdit]=useState(true);
  const [service, setService] = useState('');
  const userInfoContext = useContext(UserInfoContext)
  useEffect(()=>{
  fetch(`${serviceURLHost}/user/get-info`,{ headers: authHeader() }).then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson)
    setData(myJson);
    setService(myJson.services)
    userInfoContext.userInfoDispatch({type:'userState',payload:{... userInfoContext.userInfoState,"service":myJson.services}})
    });
    },[]
    )
   
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
               <Button variant="contained" style={{backgroundColor:"#2EC4B6", marginRight:"5px"}} onClick={()=>{setIsEdit((previous)=>!previous)}}>Save</Button>
               <Button variant="contained" style={{backgroundColor:"#2EC4B6"}} onClick={()=>{setIsEdit((previous)=>!previous)}}>Cancel</Button>
               </Grid>
               }
               </Grid>
         </div>
        <br/><br/>
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Name:</Typography>
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.username}</Typography>:
          <TextField className={classes.textFields}></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Age:
          </Typography> 
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.age}</Typography>:
          <TextField></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Course:
          </Typography>
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.course}</Typography>:
          <TextField></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Service:
          </Typography> 
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{service}</Typography>:
          <Select
          value={service}
          onChange={(event)=>{setService(event.target.value)
          userInfoContext.userInfoDispatch({type:'userState',payload:{... userInfoContext.userInfoState,"service":event.target.value}})
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
          <TextField></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Email Id:
          </Typography> <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.email}</Typography>
      </CardContent>
    </Card>
    </ThemeProvider>)
}