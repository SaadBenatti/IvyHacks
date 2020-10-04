import React, {Component} from 'react';
// import SearchBar from 'material-ui-search-bar';
import StarRatingComponent from 'react-star-rating-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { store } from 'react-notifications-component';


class CreateReview extends Component {
  constructor(props) {
    super(props);
    this.autocomplete = null;
    this.state = {
      location: '',
      placeId: '',
      cleanliness: 0,
      distancing: 0,
      service:0,
      review: '',
    }
  }

  componentDidMount = () => {
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
      this.createErrorNotif('Submission failed', 'Please choose a location to review.');
      submit = false;
    }
    if (this.state.cleanliness === 0 || this.state.distancing === 0 || this.state.service === 0) {
      this.createErrorNotif('Submission failed', 'Please provide ratings for all categories.');
      submit = false;
    }
    if (submit) {
      // send info to the database
    }
  }

  createErrorNotif = (title, message) => {
    store.addNotification({
      title: title,
      message: message,
      type: 'warning',
      container:'top-right',
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"], 
      dismiss: { duration: 4000 }
    });
  }

  updateQuery = (event) => {
    this.setState({location: event.target.value});
  }

  render() {
    return (
      <div className="review-form">  
      <script async defer src="https://maps.googleapis.com/maps/api/js?libraries=places
        &key=AIzaSyDIA9biuFpMecc9LIlpEPryqgOhzsIM-jY&callback=initMap">
      </script>     
        <input id="autocomplete" placeholder="Location" onChange={this.updateQuery} defaultValue={this.state.location} />
        <div className="location-type">
          Type
          <select name="type">
            <option value="food">Grocery Store or Restaurant</option>
            <option value="shop">Store or Shop</option>
            <option value="public">Public spaces</option>
          </select>
        </div>
        <div className="category">
          Cleanliness
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
          Social Distancing
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
          Customer Service
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

        <textarea id="review" name="Location review" rows="4" cols="50" placeholder="Leave a review!"/>
        <button type="button" onClick={this.submitReview}>Submit Review</button>
      </div>
    )
  }
}

// https://www.klaasnotfound.com/2016/11/06/making-google-maps-work-with-react/
function loadJS(src) {
  var ref = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}

export default CreateReview;