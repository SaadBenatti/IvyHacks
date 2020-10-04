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


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: 'transparent'
  },
});

function App() {
  const classes = useStyles();

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