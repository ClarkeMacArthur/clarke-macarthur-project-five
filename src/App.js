// ********Import Packages*******
import { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
// ********Import CSS************
import 'sweetalert2/dist/sweetalert2.min.css';
import './App.css';
// *******Import Components******
import Cassettes from './Casettes';
import Header  from './Header.js';
import MixNameForm from './MixNameForm';
import Playlist from './Playlist';
import SongSearch from './SongSearch';
import Footer from './Footer';



class App extends Component {

  constructor() {
    super();
    this.state = {
      isActive: true,
      nameValue: "",
      tapeName: "",
      artistName: "",
      songTitle: "",
      song: "",
      artist: "",    
      songArray: [],
      artistArray: [],
      updatedSongArray: [],
      updatedArtistArray: [],
      count:0      
    }
  }

  // Function to hide components on the page

  handleHide = () => {
    this.setState({
      isActive: false,
    });
  };


// Name Your Mix Event Handlers

  setNameValue = (e) => {
    this.setState({
      nameValue: e.target.value
    })
  }

  saveNameValue =(e) => {
    e.preventDefault();

    if (this.state.nameValue === "") {

      // Error handling for no name entered
      Swal.fire({
        title: 'Missing info',
        text: 'Enter a name for your mix!',
        icon: 'error',
        confirmButtonText: 'Okay',
      }); 

    } else {
      // Updates tapeName in State so it can be passed to Cassettes
      this.setState({
        tapeName: this.state.nameValue
      }, () => {
        this.setState({
          nameValue: '',
        });
      });

      this.handleHide();
    }

  }

// Song Search Event Handlers
setArtistValue = (e) => {
  // collect artist name from user for axios call
  this.setState({
    artistName: e.target.value
  })
}

setSongValue = (e) => {
  // collect song title from user for axios call
  this.setState({
    songTitle: e.target.value
  })
}

// take song title and artist name and make axios call
saveSongArtistValue = (e) => {
  // prevent page refresh on submit
  e.preventDefault();

  // Axios call to AudioDB API
  axios({
    url: `https://theaudiodb.com/api/v1/json/1/searchtrack.php`,
    method: 'GET',
    responseType: 'json',
    params: {
      s:this.state.artistName,
      t:this.state.songTitle
    }
  }).then((results) => {
    // create array that adds new results to copy of the song Array
    const newSongArray = [...this.state.songArray, results.data.track[0].strTrack]
    
    this.setState({
      // update songArray on state to the newSongArray with the results. Update song to display the song title result to the user in the results section. Clear inputs for songTitle
      songArray: newSongArray,
      song:results.data.track[0].strTrack,
      songTitle: ""
    })
    
    // create array that adds new results to copy of the artist Array
    const newArtistArray = [...this.state.artistArray, results.data.track[0].strArtist]

    this.setState({
      // update artistArray on state to the newArtistArray with the results. Update artist to display the artist name result to the user in the results section. Clear inputs for artistName
      artistArray: newArtistArray,
      artist:results.data.track[0].strArtist,
      artistName: "",
    })
    
    
  }).catch(() =>{
    // error handling for if no song is found by the API
    Swal.fire({
      title: "Oops! We couldn't find that song!",
      text: "Please try again",
      icon: "error",
      confirmButtonText: "Got it!",
    })

  })
}


// button to update props array passed to Playlist.js
addToArray = (e) => {
  // error handling if search form not complete
  if (this.state.artist === "" || this.state.song === "") {
    Swal.fire({
      title: "Nothing to add to mix!",
      text: "Please Search for a Song",
      icon: "error",
      confirmButtonText: "Got it!",
    })
    // conditional to ensure only 10 songs are added to the list
  } else  if (this.state.count < 10) {
    this.setState({
      updatedArtistArray: this.state.artistArray,
      updatedSongArray: this.state.songArray,
      count: this.state.count + 1,
      song: "",
      artist: ""
    })
  } else {
    // once 10 songs are logged, alert user that their mix is finished
    Swal.fire({
      title: "Your Mix is Finished!",
      text: "Would you like to play again? Clicking yes will refresh the page and clear all inputs.",
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then((result) => {

      // If no, close modal
      if (result.isDenied) {

        // If yes, then refresh page and clear inputs
      } else if (result.isConfirmed) {
        document.location.reload();
      }
    })
  }
}




// render elements to the page
  render() {
    return (
      <div className="App">
        {/* header element */}
        < Header />
        
        <main>
          <div className="wrapper">
            <div className="cassettePlaylist">
              {/* Images of cassettes and button to change color */}
              < Cassettes mixName={this.state.tapeName} />

              {/* track card with list of songs chosen by user */}
              < Playlist 
              songTitles={this.state.updatedSongArray}
              songArtists={this.state.updatedArtistArray}
              />
            </div>
            {/* Name your Mix form, will display upon render */}
            {this.state.isActive === true && (
              <MixNameForm 
              nameValue={this.state.nameValue}
              setNameValue={this.setNameValue}
              saveNameValue={this.saveNameValue}/>
            )}
            
            {/* Song form, displayed conditionally once the MixNameForm is submitted */}
            {this.state.isActive === false && (
                < SongSearch 
                songArtist={this.state.artistName}
                songValue={this.state.songTitle}
                setArtistValue={this.setArtistValue}
                setSongValue={this.setSongValue}
                saveSongArtistValue={this.saveSongArtistValue}
                />
              )}
              {/* results display */}
            <div className="results">
              <p>{this.state.artist} - {this.state.song}</p>
            <button className="nameButton" onClick={this.addToArray} >Add to Mix</button>
          </div>
        </div>
        </main>
        {/* Footer */}
        < Footer />

      </div>
    );
  }
}

export default App;
