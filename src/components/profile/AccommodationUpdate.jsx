import { ThemeProvider,makeStyles } from '@mui/styles';
import theme from "../themes/Theme"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useContext,useEffect,useState } from 'react';
import authHeader from '../services/auth-header';
import {serviceURLHost} from "../constants/Constant"
import EditIcon from '@mui/icons-material/Edit';
import { Button, Grid, IconButton, TextField } from '@mui/material';

const useStyles = makeStyles({
    root: {
      minWidth: 444,
      alignContent:'center'
    },
  });
  

export default function AccommodationUpdate(){

  const [area,setArea]=useState("");
  const [eirCode,setEirCode]=useState("");
  const [duration,setDuration]=useState("");
  const [availablity,setAvailablity]=useState("");
  const [education,setEducation]=useState("");
  const [work,setWork]=useState("");
  const [picture,setPicture]=useState();
  const [pictureData,setPictureData]=useState("");
  const [rent,setRent]=useState("");
  const [description,setDescription]=useState("");
  const [isEdit,setIsEdit]=useState(true);

  const [data,setData]= useState(
    {
          "area":"",
          "eirCode":"",
          "duration":"",
          "availablity":"",
          "education":"",
          "work":"",
          "picture":{data:""},
          "rent":"",
          "description":""
      }

  );


    async function onSaveHandler() {

      let requestData={... data};
      requestData.area=data.area!==area && area!==""?area:data.area;
      requestData.eirCode=data.eirCode!==eirCode && eirCode!==""?eirCode:data.eirCode;
      requestData.duration=data.duration!==duration && duration!==""?duration:data.duration;
      requestData.availablity=data.availablity!==availablity && availablity!==""?availablity:data.availablity;
      requestData.education=data.education!==education && education!==""?education:data.education;
      requestData.work=data.work!==work && work!==""?work:data.work;
     // requestData.picture=data.picture!==picture && area!==""?picture:data.picture;
      requestData.picture=null;
      requestData.rent=data.rent!==rent && rent!==""?rent:data.rent;
      requestData.description=data.description!==description && description!==""?description:data.description;
      requestData=JSON.stringify(requestData)
      const formData = new FormData;
      formData.append("accomodation", requestData);
      formData.append("file",picture);

      // console.log(course)
      console.log(requestData)
      // requestData.phoneNumber=phoneNumber;
      let header={... authHeader()}
      const response = await fetch(`${serviceURLHost}/nci/accomodation/add`, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: header,
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: formData // body data type must match "Content-Type" header
      });
      return await response.json().then(()=>{
       setArea(data.area)
       setEirCode(data.eirCode)
       setDuration(data.duration)
       setAvailablity(data.availablity)
       setEducation(data.education)
       setWork(data.work)
       setPicture(data.picture)
       setPictureData(data.picture.data)
       setRent(data.rent)
       setDescription(data.description)
       setIsEdit((previous)=>!previous)
      }).catch(()=>{
        setIsEdit((previous)=>!previous)
      }); // parses JSON response into native JavaScript objects
     }

  useEffect(()=>{
    fetch(`${serviceURLHost}/nci/accomodation/get`,{ headers: authHeader() }).then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(myJson)
      setData(myJson);
      setPictureData(myJson.picture.data)
     // setLoad(true);
      });
     },[isEdit]
     )
    const [uploadedFile,setUploadedFile]=useState();
    // const [uploadedUrl,setUploadedUrl]=useState({'name':'hi'});
    const classes = useStyles();
    return(<ThemeProvider theme={theme}>
          <Card className={classes.root} variant="outlined">
         <CardContent>
         <Grid alignSelf="center">
              <Typography variant="h4">Accomodation Update</Typography>
              </Grid>
           <div style={{display: 'block',marginLeft: 'auto',width: '54%'}}>
         <Grid>
           {isEdit?
           <IconButton onClick={()=>{setIsEdit((previous)=>!previous)}}>
             <EditIcon>
               </EditIcon>
               </IconButton>:
               <Grid spacing={2}>
               <Button variant="contained" onClick={onSaveHandler}
               style={{marginRight:"8px", backgroundColor:"#2EC4B6"}}
               >Save</Button>
               <Button variant="contained" onClick={()=>{setIsEdit((previous)=>!previous)}}
               style={{backgroundColor:"#2EC4B6"}}
               >Cancel</Button>
               </Grid>
               }
               </Grid>
         </div>
        <br/><br/>
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Area:</Typography>
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.area}</Typography>:
          <TextField value={area} onChange={(e)=>{setArea(e.target.value)}}></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">EirCode:
          </Typography> 
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.eirCode}</Typography>:
          <TextField value={eirCode} onChange={(e)=>{setEirCode(e.target.value)}}></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Duration:
          </Typography>
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.duration}</Typography>:
          <TextField value={duration} onChange={(e)=>{setDuration(e.target.value)}}></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Availablity:
          </Typography> 
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.availablity}</Typography>:
          <TextField value={availablity} onChange={(e)=>{setAvailablity(e.target.value)}}>{availablity}</TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Education:
          </Typography>
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.education}</Typography>:
          <TextField value={education} onChange={(e)=>{setEducation(e.target.value)}}></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Work:
          </Typography> 
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.work}</Typography>:
          <TextField value={work} onChange={(e)=>{setWork(e.target.value)}}></TextField>
          }
          <br/><br/>
          <Grid container justifyContent="center" spacing={0}>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Picture:
          </Typography>
          {isEdit?
         <Grid>
         <Typography variant="h5" component="h2" style={{display: 'inline-block'}}><img src={"data:image/png;base64,"+pictureData} alt="no picture" width="100 px" height="100 px"/></Typography>
         </Grid>:
          <Grid>
          <input
          accept="image/*"
          // className={classes.input}
          style={{ display: 'none' }}
          id="upload-button"
          //multiple
          type="file"
          onChange={(event)=>{
            // let files=[];
            // for(let i=0;i<event.target.files.length;i++)
            // {
            //   files.push(event.target.files[i])
            // }
            setUploadedFile(event.target.files[0])
            console.log(event.target.files)
            setPicture(event.target.files[0])
            setPictureData(event.target.files[0].data)
            // console.log(URL.createObjectURL(event.target.files[0]))
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
        {/* {uploadedFile.map((file)=>{
          return <Typography>{file.name}</Typography>
        })} */}
        </Grid> }
        </Grid>
          <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Rent:
          </Typography> 
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.rent}</Typography>:
          <TextField value={rent} onChange={(e)=>{setRent(e.target.value)}}></TextField>
          }
          <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Description:
          </Typography>
          {isEdit?
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>{data.description}</Typography>:
          <TextField value={description} onChange={(e)=>{setDescription(e.target.value)}}></TextField>
          }
      </CardContent>
    </Card>
    </ThemeProvider>)
}