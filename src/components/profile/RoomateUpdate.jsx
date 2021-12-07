import { ThemeProvider,makeStyles } from '@mui/styles';
import theme from "../themes/Theme"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Grid, IconButton, TextField } from '@mui/material';
import {UserInfoContext} from "../../App"
import { useContext,useEffect,useState } from 'react';
import authHeader from '../services/auth-header';
import {serviceURLHost} from "../constants/Constant"
const useStyles = makeStyles({
    root: {
      minWidth: 444,
      alignContent:'center'
    },
  });
  

export default function AccommodationUpdate(){
  const [data,setData]= useState(
    {
          "userId":"",
          "area":[""],
          "eirCode":[""],
          "duration":"",
          "availablity":"",
          "education":"",
          "work":"",
          "picture":"",
          "rent":"",
          "description":""
      }

  );
  useEffect(()=>{
    fetch(`${serviceURLHost}/nci/roommate/get`,{ headers: authHeader() }).then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(myJson)
      setData(myJson);
     // setLoad(true);
      });
     },[]
     )
  //   let data={
  //     "userId":"234fjsk4543",
  //     "area":"Pannal street",
  //     "eirCode":"D2W10",
  //     "duration":"1 year",
  //     "availablity":"01-01-2022",
  //     "education":"Master's in Cloud",
  //     "work":"Student",
  //     "picture":"s3://test-cool/profile-picture/id-18:31:31-IMG_20210925_173906.jpg",
  //     "rent":"500 euros",
  //     "description":"Clean house"
  // }
    const [isEdit,setIsEdit]=useState(true);
    const [uploadedFile,setUploadedFile]=useState([{'name':''}]);
    const classes = useStyles();
    return(<ThemeProvider theme={theme}>
          <Card className={classes.root} variant="outlined">
         <CardContent>
         <Grid alignSelf="center">
              <Typography variant="h4">Roommate Update</Typography>
              </Grid>
           <div style={{display: 'block',marginLeft: 'auto',width: '54%'}}>
         <Grid>
           {isEdit?
           <IconButton onClick={()=>{setIsEdit((previous)=>!previous)}}>
             <EditIcon>
               </EditIcon>
               </IconButton>:
               <Grid spacing={2}> 
               <Button variant="contained" style={{marginRight:"8px", backgroundColor:"#2EC4B6"}}
                 onClick={()=>{setIsEdit((previous)=>!previous)}}>Save</Button>
               <Button variant="contained" style={{backgroundColor:"#2EC4B6"}} onClick={()=>{setIsEdit((previous)=>!previous)}}>Cancel</Button>
               </Grid>
               }
               </Grid>
         </div>
        <br/><br/>
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Area:</Typography>
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.area.join(", ")}</Typography>:
          <TextField></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">EirCode:
          </Typography> 
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.eirCode.join(", ")}</Typography>:
          <TextField></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Duration:
          </Typography>
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.duration}</Typography>:
          <TextField></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Availablity:
          </Typography> 
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.availablity}</Typography>:
          <TextField></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Education:
          </Typography>
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.education}</Typography>:
          <TextField></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Work:
          </Typography> 
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.work}</Typography>:
          <TextField></TextField>
          }
          <br/><br/>
          <Grid container justifyContent="center" spacing={0}>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Picture:
          </Typography>

          {isEdit?
          <Grid>
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}><img src={"data:image/png;base64,"+data.picture.data} alt="logo" width="100 px" height="100 px"/></Typography></Grid>:
          <Grid>
          <input
          accept="image/*"
          // className={classes.input}
          style={{ display: 'none' }}
          id="upload-button"
          multiple
          type="file"
          onChange={(event)=>{
            let files=[];
            for(let i=0;i<event.target.files.length;i++)
            {
              files.push(event.target.files[i])
            }
            setUploadedFile(files)
            console.log(event.target.files)
            console.log(URL.createObjectURL(event.target.files[0]))
            // setUploadedUrl(URL.createObjectURL(event.target.files[0]))
          }}
        />
        <label htmlFor="upload-button">
          <Button variant="contained" component="span" style={{backgroundColor:"#2EC4B6"}}
          onClick={(param)=>{
            console.log(param.target)
          }}
          >
            Upload
          </Button>
        </label>
        {/* <img src={uploadedUrl} alt="uploaded"></img> */}
        {uploadedFile.map((file)=>{
          return <Typography>{file.name}</Typography>
        })}
        </Grid> }
        </Grid>
          <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Budget:
          </Typography> 
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.budget}</Typography>:
          <TextField></TextField>
          }
          <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Description:
          </Typography>
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{'test'}</Typography>:
          <TextField></TextField>
          }
      </CardContent>
    </Card>
    </ThemeProvider>)
}