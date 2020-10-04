import React from 'react';
import ReactNotifications from 'react-notifications-component';
import './App.css';
// import CreateReview from './components/create-review';
import MapView from './components/map-view';
import CreateReview from './components/create-review';


function App() {
  return (
    <div className="App">
      <script async defer src="https://maps.googleapis.com/maps/api/js?libraries=places
        &key=AIzaSyDIA9biuFpMecc9LIlpEPryqgOhzsIM-jY&callback=initMap">
      </script>     
      <ReactNotifications />
      <CreateReview />
    </div>
  );
}

export default App;
