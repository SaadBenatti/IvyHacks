import React, {Component} from 'react';
// import SearchBar from 'material-ui-search-bar';
import StarRatingComponent from 'react-star-rating-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { store } from 'react-notifications-component';
import { loadJS, removeGoogleMapScript } from '../maps-functions';

class CreateReview extends Component {
  constructor(props) {
    super(props);
    this.autocomplete = null;
    this.state = {
      location: '',
      placeId: '',
      type: '',
      cleanliness: 0,
      distancing: 0,
      service:0,
      review: '',
    }
  }

  componentDidMount = () => {
    // clear old script
    removeGoogleMapScript();
    window.initMap = this.initMap;
    loadJS("https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyDIA9biuFpMecc9LIlpEPryqgOhzsIM-jY&callback=initMap");
  }

// add listener for changes & get user location
  initMap = () => {
    this.autocomplete = new window.google.maps.places.Autocomplete(
      document.getElementById('autocomplete'));
    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var circle = new window.google.maps.Circle(
          {center: geolocation, radius: position.coords.accuracy});
        this.autocomplete.setBounds(circle.getBounds());
        this.autocomplete.setOptions({strictBounds: true})
      });
    }
  }

  handlePlaceSelect = () => {
    const locationObject = this.autocomplete.getPlace();
    this.setState({
      location: locationObject.description,
      placeId: locationObject.place_id,
    });
  }

  submitReview = (event) => {
    let submit = true;
    if (this.state.location === '') {
      this.createNotif('Submission failed', 'Please choose a location to review.', 'warning');
      submit = false;
    }
    if (this.state.cleanliness === 0 || this.state.distancing === 0 || this.state.service === 0) {
      this.createNotif('Submission failed', 'Please provide ratings for all categories.', 'warning');
      submit = false;
    }
    if (submit) {
      // send info to the database
      this.createNotif("Submission succeeded!", "Your review has been submitted", 'success');
    }
  }

  createNotif = (title, message, type) => {
    store.addNotification({
      title: title,
      message: message,
      type: type,
      container:'top-right',
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"], 
      dismiss: { duration: 4000 }
    });
  }


  updateQuery = (event) => {
    this.setState({location: event.target.value});
  }

  changeType = (event) => {
    this.setState({type: event.target.value});
  }

  render() {
    return (
      <div className="review-form" style={{
        fontFamily: '"Poppins", sans-serif',
        position: 'absolute',
        left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
      }}>  
      <h3>Where did you go?</h3>  
        <input id="autocomplete" placeholder="Location" onChange={this.updateQuery} defaultValue={this.state.location} />
        <br></br><br></br>

        <div className="location-type">
          Type: <br></br>
          <select name="type" defaultValue={this.state.type} onChange={this.changeType}>
            <option value="grocery">Grocery Store</option>
            <option value="shop">Shopping</option>
            <option value="restaurant">Restaurant</option>
            <option value="public">Public spaces</option>
          </select>
        </div>
        <br></br>

        <div className="category">
          <h3>Cleanliness</h3>
          <div className="category-description">
            How clean was this place? Are there good procedures to clean often touched surfaces?
          </div>
          <div className="ratings">
            <StarRatingComponent
              name='cleanliness'
              starCount={5}
              value={this.state.cleanliness}
              onStarClick={(val, prev, name) => this.setState({cleanliness: val})} />
          </div>
        </div>

        <div className="category">
        <h3>Social Distancing</h3>
          <div className="category-description">
            Are people following restrictions (wearing masks, social distancing)? Are occupancy limits being respected?
          </div>
          <div className="ratings">
            <StarRatingComponent
              name='distancing'
              starCount={5}
              value={this.state.distancing}
              onStarClick={(val, prev, name) => this.setState({distancing: val})} />
          </div>
        </div>

        <div className="category">
        <h3>Customer Service</h3>
          <div className="category-description">
            Do the staff enforce restrictions? Did they make you feel safe?
          </div>
          <div className="ratings">  
            <StarRatingComponent
              name='service'
              starCount={5}
              value={this.state.service}
              onStarClick={(val, prev, name) => this.setState({service: val})} />
          </div>
        </div>
        <br></br><br></br>

        <textarea id="review" name="Location review" rows="4" cols="50" placeholder="Additional comments here!"/><br></br>
        <button type="button" onClick={this.submitReview}>Submit Review</button>
      </div>
    )
  }
}

export default CreateReview;