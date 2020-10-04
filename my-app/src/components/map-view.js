import React, {Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Grocery from '../groceries.svg';
import PublicSpace from '../public_spaces.svg';
import DepartmentStores from '../department_stores.svg';
import Restaurant from '../restaurant.svg';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      attribute: '',
      zipCode: '',
      results: [],
    }
  }

  changeZip = (event) => {
    this.setState({zipCode: event.target.value});
  }

  search = () => {
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
        <script async defer src="https://maps.googleapis.com/maps/api/js?libraries=places
        &key=AIzaSyDIA9biuFpMecc9LIlpEPryqgOhzsIM-jY&callback=initMap">
      </script>     
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
          <input type="text" onChange={this.changeZip} placeholder="location" defaultValue={this.state.zipCode}></input>

          <button type="button" onClick={this.search}>Search</button>
        </div>
        <div className="row">
          <div className="side"> 
            <div className="search-header">
              <h2>Top Results</h2>
              <img src={Grocery} alt="Grocery decoration"/>
            </div>
            <div className="search-results">
              {this.state.results.map((result, index) => (
                this.createResult(result.name, result.rating, index)
              ))}
          </div>
          <div className="map"> </div>
        </div>
      </div>
    </div>
    );
  }
}

export default MapView;