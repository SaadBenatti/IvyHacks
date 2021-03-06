import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Logo } from './svg/logo.svg';
import { ReactComponent as SearchIcon } from './svg/search.svg';
import { ReactComponent as ReviewBtn } from './svg/addrev.svg';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  customizeToolbar: {
    minHeight: 100,
  },
  canaryLogo: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    color: 'black',
    borderRadius: 25,
    backgroundColor: fade(theme.palette.common.white, 0.5),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.5),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '15%',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 20
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  review: {
    '& svg': {
        fontSize: 100
      },
    padding: theme.spacing(0, 5),
  }
}));

export default function Header() {
  const classes = useStyles();
  const [address, setAddress] = React.useState("");
  const handleSelect = async value => {};

  // for conditional background change later
  const currCategoryBackground = 'groceries';

  return (
    <div className={classes.root}>
      <AppBar position="sticky" elevation={0}
        style={{ backgroundColor: '#F0D8C9' }}>
        <Toolbar className={classes.customizeToolbar}>
            <IconButton className = {classes.canaryLogo} >
            <Link to="/About">
                <Logo />
            </Link>
            </IconButton>
            
          <Typography className={classes.title} variant="h6" noWrap>
            {/* About */}
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon} >
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Location…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              style={{
                fontFamily: '"Poppins", sans-serif'
              }}
            />
          </div>

          <div className={classes.review}>
          {/* <Button component={Link} to="/components/create-review"> */}
          <Link to="/components/create-review">
            <ReviewBtn />
          </Link>
          {/* </Button> */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}