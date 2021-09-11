

import React ,{useState} from 'react';
import ReactPlayer from 'react-player';
import './Video.css';
import AppBar from '@material-ui/core/AppBar';
import  Toolbar from '@material-ui/core/Toolbar';
import  Typography  from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { IconButton, makeStyles, withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Slide from 'react-reveal/Slide';
import Jump from 'react-reveal/Jump';


const useStyles = makeStyles({
    playerWrapper: {
        width:"100%",
        position:"relative",
        paddingTop:"40px",
    },
 
    IconButton:{
        backgroundColor:"white",
    }
});

export default function Video() {
    const classes = useStyles();
    const [state , setState] = useState({
        playing:true
    });
    const {playing} = state
    const handlePlayPause = () => {
        setState({...state,playing:!state.playing});
    };
    return <>

    <AppBar position="fixed">
    
    </AppBar>
    
    <Container maxWidth="md">
     <Slide right>   <div className={classes.playerWrapper}>
        <ReactPlayer 
        width={"100%"}
        height="100%"
        url="https://player.vimeo.com/external/417999357.hd.mp4?s=b1353f4582debe842d668dfed2464b4f3dc83eae&profile_id=175&oauth2_token_id=57447761"
        
        muted={false}
        playing={playing}
        />
        <div className={classes.controlsWrapper}>
           
              <Grid item>
               <Grid container alignItems="center" direction="row">
                   <IconButton onClick={handlePlayPause} className={classes.bottomIcon}>
                   <Jump>    <PlayArrowIcon fontSize="large" /></Jump>
                   </IconButton>

                  

                   

               </Grid>

              </Grid>
             
            
        </div>
        </div>
        </Slide>
    </Container>

      
    </>
            
            
    
    
}
