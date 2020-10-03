import React, {Component} from 'react';
import SearchBar from 'material-ui-search-bar';
import Script from 'react-load-script';
import StarRatingComponent from 'react-star-rating-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { store } from 'react-notifications-component';


class CreateReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      placeId: '',
      cleanliness: 0,
      distancing: 0,
      service:0,
      review: '',
    }
  }

  searchPlace = () => {
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'));
    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
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
    if (this.state.location == '') {
      this.createErrorNotif('Submission failed', 'Please choose a location to review.');
      submit = false;
    }
    if (this.state.cleanliness == 0 || this.state.distancing == 0 || this.state.service == 0) {
      this.createErrorNotif('Submission failed', 'Please provide ratings for all categories.');
      submit = false;
    }
    if (submit) {
      // send info to the database
    }
  }

  createErrorNotif = (title, message) => {
    store.addNotification({
      title: {title},
      message: {message},
      type: 'warning',
      container:'top-right',
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"], 
      dismiss: { duration: 4000 }
    });
  }

  render() {
    return (
      <div className="review-form">
        <Script url="https://maps.googleapis.com/maps/api/jskey=AIzaSyDIA9biuFpMecc9LIlpEPryqgOhzsIM-jY&libraries=places"          
          onLoad={this.searchPlace} />        
        <SearchBar id="autocomplete" placeholder="Location" value={this.state.location} />

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

        <textarea id="review" name="Location review" rows="4" cols="50" placeholder="Leave a review!"> </textarea>
        <button type="button" onClick={this.submitReview}>Submit Review</button>
      </div>
    )
  }

}