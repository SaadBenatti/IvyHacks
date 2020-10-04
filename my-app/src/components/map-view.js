import React, {Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { ReactComponent as Grocery } from '../svg/groceries.svg';
import { ReactComponent as Department } from '../svg/department-stores.svg';
import { ReactComponent as Restaurants } from '../svg/restaurants.svg';
import { ReactComponent as Spaces } from '../svg/public-spaces.svg'
import { loadJS, removeGoogleMapScript } from '../maps-functions';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      attribute: '',
      area: '',
      results: [],
    }
  }

  componentDidMount = () => {
    removeGoogleMapScript();
    window.initMap = this.initMap;
    loadJS("https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyDIA9biuFpMecc9LIlpEPryqgOhzsIM-jY&callback=initMap");
  }

// add listener for changes & get user location
  initMap = () => {
    this.autocomplete = new window.google.maps.places.Autocomplete(
      document.getElementById('autocomplete'));
    this.map = new window.google.maps.Map(document.getElementById('map'));
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
        this.autocomplete.setOptions({strictBounds: true});
        this.map.setCenter(geolocation);
        this.map.setZoom(15);
      });
    }
  }

  handlePlaceSelect = () => {
    const locationObject = this.autocomplete.getPlace();
    this.setState({
      location: locationObject.description,
      placeId: locationObject.place_id,
      area: locationObject,
    });
  }

  changeLocation = (event) => {
    this.setState({area: event.target.value});
  }

  search = () => {
    console.log(this.state.area);
    let latlng = this.state.area.geometry.location;
    this.map.setCenter(latlng);
    // take all the information, query the firebase, save results to state
    // if there are no reviews, return the top results from the google maps API
    // OR "looks like there are no reviewed locations for your query"
  }

  createResult = (locationName, overallRating, index) => {
    return (
      <div className='result' key={index}>
        <hr/>
        <StarRatingComponent
          name={locationName}
          starCount={5}
          value={Math.round(overallRating)}
          editing={false}
        />
        <div className="location-name">{locationName}</div>
        <br/>
      </div>
    );
  }

  render = () => {
    return (
      <div className="searchPage">
        <div className="lookingfor"> 
          <div> I am looking for </div> 
            <select name = "location" id = "location">
              <option>grocery store</option>
              <option>department store</option>
              <option>restaurant</option>
              <option>public space</option>
            </select>

            <div>with</div>
            <select name = "attribute" id = "attribute" >
              <option>good cleanliness</option>
              <option>good social distancing</option>
              <option>safe staff</option>
              <option>all of the above</option>
            </select>

            <div>near</div>
          <input onChange={this.changeLocation} placeholder="location" id="autocomplete" defaultValue={this.state.area}></input>

          <button type="button" onClick={this.search}>Search</button>
        </div>
        <div className="row">
          <div className="side"> 
            <div className="search-header">
              <h2>Top Results</h2>
              <Grocery />
            </div>
            <div className="search-results">
              {this.state.results.map((result, index) => (
                this.createResult(result.name, result.rating, index)
              ))}
          </div>
        </div>
        <div id="map" />
      </div>
    </div>
    );
  }
}

export default MapView;