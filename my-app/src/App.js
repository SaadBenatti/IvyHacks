import React from 'react';
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
import './App.css';
import CreateReview from './components/create-review'
import About from './About'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { fontFamily } from '@material-ui/system';


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