import React from 'react';
import ReactNotifications from 'react-notifications-component';
import { Grid, CardContent, IconButton, Card } from "@material-ui/core";
import Header from './Header';
import { ReactComponent as Groceries } from './svg/groceries.svg';
import { ReactComponent as Department } from './svg/department-stores.svg';
import { ReactComponent as Restaurants } from './svg/restaurants.svg';
import { ReactComponent as Spaces } from './svg/public-spaces.svg';
import { makeStyles } from '@material-ui/core/styles';
// import CardActions from '@material-ui/core/CardActions';
// import Typography from '@material-ui/core/Typography';
import './App.css';
import CreateReview from './components/create-review'
import About from './About'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MapView from './components/map-view';
// import CreateReview from './components/create-review';
import * as firebase from 'firebase';


// var firebase = require("firebase/app");

  // Add the Firebase products that you want to use
  require("firebase/auth");
  require("firebase/firestore");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
// Add the Firebase products that you want to use
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
    backgroundColor: 'transparent',
    fontFamily: '"Poppins", sans-serif'
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
      <ReactNotifications />

      <div>
        <BrowserRouter>
          <Grid container>

            <Grid item xs={12}>
              <Header />
            </Grid>

            <Grid item xs={12}>
              <Switch>
                <Route path="/" exact>
                  <div>

                    <div style={{
                      position: 'absolute',
                      left: '50%', top: '57%', // we dont talk about it..lol
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center'
                    }}>

                      <Grid container>

                        <Grid item xs={12}>
                          <h1>
                            Welcome, <br></br>
                            where are you headed today?
                          </h1>
                          <br></br>
                        </Grid>

                        <Grid item xs={6}>
                            <Link to= "/components/map-view">
                              {/* GROCERIES */}
                              <IconButton>
                                <Card className={classes.root} elevation={0}>
                                  <CardContent>
                                    <Groceries />
                                    <br></br>
                                    <h4>
                                      Groceries
                                </h4>
                                  </CardContent>
                                </Card>
                              </IconButton>
                              </Link>
                        </Grid>

                        <Grid item xs={6}>
                        <Link to= "/components/map-view">
                          {/* DEPARTMENT STOREs */}
                          <IconButton>
                            <Card className={classes.root} elevation={0}>
                              <CardContent>
                                <Department />
                                <br></br>
                                <h4>
                                  Department Stores
                                </h4>
                              </CardContent>
                            </Card>
                          </IconButton>
                          </Link>
                        </Grid>

                        <Grid item xs={6}>
                        <Link to= "/components/map-view">
                          {/* RESTAURANTS */}
                          <IconButton>
                            <Card className={classes.root} elevation={0}>
                              <CardContent>
                                <Restaurants />
                                <br></br>
                                <h4>
                                  Restaurants
                                </h4>
                              </CardContent>
                            </Card>
                          </IconButton>
                          </Link>
                        </Grid>

                        <Grid item xs={6}>
                        <Link to= "/components/map-view">
                          {/* PUBLIC SPACES */}
                          <IconButton>
                            <Card className={classes.root} elevation={0}>
                              <CardContent>
                                <Spaces />
                                <br></br>
                                <h4>
                                  Public Spaces
                                </h4>
                              </CardContent>
                            </Card>
                          </IconButton>
                          </Link>
                        </Grid>

                      </Grid>
                    </div>

                  </div>
                </Route>

                {/* home page logo on-click reroute to about*/}
                <Route path="/About" exact>
                  <div>
                    <About />
                  </div>
                </Route>

                {/* add review btn on-click reroute to create-review*/}
                <Route path="/components/create-review" exact>
                  <div>
                    <CreateReview />
                  </div>
                </Route>

                <Route path="/components/map-view" exact>
                  <div>
                    <MapView />
                  </div>
                </Route>

              </Switch>
            </Grid>
          </Grid>
        </BrowserRouter>
      </div>
    </Grid>
  );

}

export default App;