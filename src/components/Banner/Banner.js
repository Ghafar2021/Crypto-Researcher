import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Carousel from './Carousel';

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: 'url(./2.jpg)',
  },
  bannerContent:{
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 25,
    justifyContent:'space-around'
  },
  tagline: {
    display: 'flex',
    height: '40%',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
    
  },

}));

function Banner() {
  const classes = useStyles();
    return (
      <div className={classes.banner}>
        <Container className={classes.bannerContent}>
          <div className={classes.tagline}>
            <Typography 
              variant='h2'
              style= {{
                fontWeight: 'bold',
                marginBottom: 15,
                marginRight:50,
                fontFamily: 'Montserrat',
              }}
            >
              Crypto Researcher
            </Typography>
            <Typography
              variant='subtitle2'
              style={{
                color:'grey', 
                textTransform: 'capitalize',
                fontFamily:'Montserrat',
                marginBottom: 15,
  
              }}
            >
              Get all the Info regarding your favorite Crypto Currency 
            </Typography>
          </div>
          <Carousel />
        </Container>
      </div>

    );
}

export default Banner;