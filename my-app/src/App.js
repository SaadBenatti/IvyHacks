import React from 'react';
import ReactNotifications from 'react-notifications-component';
import { Grid } from "@material-ui/core";
import Header from './Header';
import { ReactComponent as Groceries } from './svg/groceries.svg';
import { ReactComponent as Department } from './svg/department-stores.svg';
import { ReactComponent as Restaurants } from './svg/restaurants.svg';
import { ReactComponent as Spaces } from './svg/public-spaces.svg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import './App.css';
// import CreateReview from './components/create-review';
import MapView from './components/map-view';
import CreateReview from './components/create-review';
import * as firebase from 'firebase';


// var firebase = require("firebase/app");

  // Add the Firebase products that you want to use
  require("firebase/auth");
  require("firebase/firestore");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBTHB21J-4g4-GD86mShx5Sd8JztJiwuQ",
  authDomain: "ivyhacks-ebbc6.firebaseapp.com",
  databaseURL: "https://ivyhacks-ebbc6.firebaseio.com",
  projectId: "ivyhacks-ebbc6",
  storageBucket: "ivyhacks-ebbc6.appspot.com",
  messagingSenderId: "793780521339",
  appId: "1:793780521339:web:80799d16e5163782b015de",
  measurementId: "G-PVSJQD49N5"
};
  
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  else {

    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }



  const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: 'transparent'
  },
});



async function getReviews() {

  const reviews = firebase.firestore().collection('Reviews');
  const reviews_doc = await reviews.get();
  reviews_doc.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
  });

}

function App() {
  const classes = useStyles();

  getReviews();
  
  

  return (
    <Grid container direction="column" >
      <script async defer src="https://maps.googleapis.com/maps/api/js?libraries=places
        &key=AIzaSyDIA9biuFpMecc9LIlpEPryqgOhzsIM-jY&callback=initMap">
      </script>     
      <ReactNotifications />
      <Grid item>
        <Header />
      </Grid>

      <Grid item container>
        <Grid xs={false} s={2} />
        <Grid xs={12} s={8}>
        <div style={{
              position: 'absolute', left: '50%', top: '60%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center'
          }}>
          <h1>
            Welcome, <br></br>
            where are you headed today?
          </h1><br></br>

          {/* GROCERIES */}
          <IconButton>
          <Card className={classes.root} elevation={0}>
          <CardContent>
            <Groceries /> 
            <br></br>
            <h3>
              Groceries
            </h3>
          </CardContent>
          </Card>
          </IconButton>

          {/* DEPARTMENT STORE */}
          <IconButton>
          <Card className={classes.root} elevation={0}>
          <CardContent>
            <Department /> 
            <br></br>
            <h3>
              Department Store
            </h3>
          </CardContent>
          </Card>
          </IconButton>

          {/* RESTAURANTS */}
          <IconButton>
          <Card className={classes.root} elevation={0}>
          <CardContent>
            <Restaurants /> 
            <br></br>
            <h3>
              Restaurants
            </h3>
          </CardContent>
          </Card>
          </IconButton>

          {/* PUBLIC SPACES */}
          <IconButton>
          <Card className={classes.root} elevation={0}>
          <CardContent>
            <Spaces /> 
            <br></br>
            <h3>
              Public Spaces
            </h3>
          </CardContent>
          </Card>
          </IconButton>

          </div>
        </Grid>
        <Grid xs={false} s={2} /> 
      </Grid>
      
    </Grid>
  );

}

export default App;