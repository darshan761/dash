import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Header from '../LandingPage/Header';
import { Box } from '@material-ui/core';
import { Icon } from '@material-ui/core';
import ServiceCall from '../../Service/ServiceCall';

import CssBaseline from '@material-ui/core/CssBaseline';
import Rankings from './Rankings';
import Stats from './Stats'

const useStyles = makeStyles((theme) => ({
    column1: {
        width: '70%',
        float: 'left'
    },
    column2: {
        width: '28%',
        float: 'right'
    },
    column3: {
        width: '100%',
        height: '200px',
        overflowY: 'auto',
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    div1 : {
        display : 'container'
    },
    div2 : {
        display : 'inline'
    },
    icon: {
        width: '40%',
        height: '40%',
        padding: '5%'
    },
    // root: {
    //     flexGrow: 1,
    // },
    paper: {
        padding: theme.spacing(1),
        //margin: 'auto',
        maxWidth: '100%'
    },
    img: {
        margin : 20,
    },
    progressbar: {
        height: 10,
        borderRadius: 5,
    },
    title: {
        paddingTop: '5%'
    },
    courseButtons: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    divHeading: {
        color: '#e57373'
    },
    subHeading: {
        color: '#115293',
        fontWeight: '600'
    },
    desc: {
        color: '#7A8C98'
    },
    text:{
        margin : 10,
    },
    gaps : {
        margin : 20,
        padding: 5,
    }
}));

export default function ProfileMain() {

    const [profile, setProfile] = useState({
        FirstName: '',
        LastName: '',
        Department: '',
        Designation: '',
        Email:'',
        goals_set:'',
        points:'',
        streaks:''
      });

      useEffect(async () => {
    
         ServiceCall.getUserDetails(3).then((response)=>{
           
            setProfile({
                FirstName: response.data.FirstName,
                LastName: response.data.LastName,
                Department: response.data.Department,
                Designation: response.data.Designation,
                Email:response.data.Email,
                goals_set:response.data.goals_set,
                points:response.data.points,
                streaks:response.data.streak
            })
              console.log(response.data)
          })

        }, [profile.FirstName])
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
                <Container maxWidth="lg">
                <Header title="Profile" />
                <main>
                    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
                        <Box gridColumn="span 3" className={classes.gaps}>
                            <Card>
                                <img 
                                    src="https://www.nicepng.com/png/full/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png"
                                    height="200"
                                    width="200"
                                    className={classes.img}
                                    alt="profile"
                                    >
                                </img>
                                <Typography variant="h5" className={classes.text}>
                                    {profile.FirstName}   {profile.LastName}
                                </Typography>
                                <Typography variant="body1" className={classes.text}>
                                {profile.Designation}
                                </Typography>
                                <Typography variant="body1" className={classes.text}>
                                {profile.Department}
                                </Typography>
                                {/* <div className={classes.div1}>
                                    <CircleIcon/>
                                    <Typography variant = "h5" className={classes.div2}>
                                        40
                                    </Typography>
                                </div> */}
                            </Card>
                        </Box>
                        <Box gridColumn="span 9" className={classes.gaps}>
                            <Card>
                                <Rankings profile={profile}/>
                            </Card>
                        </Box>
                        <Box gridColumn="span 12" className={classes.gaps}>
                            <Card>
                                <Stats/>
                            </Card>
                        </Box>
                    </Box>
                </main>

                </Container>
                <br />
        </React.Fragment>
    );
}
