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
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import './App.css';
import CreateReview from './components/create-review'
import About from './About'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MapView from './components/map-view';



var firebase = require("firebase/app");

  // Add the Firebase products that you want to use
  require("firebase/auth");
  require("firebase/firestore");

  var firebaseConfig = {
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
    firebase.initializeApp({});
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

function App() {
  const classes = useStyles();

  return (
    <Grid container direction="column" >

      <div>
        <BrowserRouter>
          <Grid container>

            {/* <script async defer src="https://maps.googleapis.com/maps/api/js?libraries=places
              &key=AIzaSyDIA9biuFpMecc9LIlpEPryqgOhzsIM-jY&callback=initMap">
            </script>   */}

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

                          {/* </Route> 
                          <Route path="/components/create-review" exact>
                          <div> FILL </div>
                          </Route>  */}

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
                        </Grid>

                        <Grid item xs={6}>
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
                        </Grid>

                        <Grid item xs={6}>
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
                        </Grid>

                        <Grid item xs={6}>
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

              </Switch>
            </Grid>
          </Grid>
        </BrowserRouter>
      </div>
    </Grid>
  );

}

export default App;