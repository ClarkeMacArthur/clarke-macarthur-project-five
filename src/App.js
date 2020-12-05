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


setArtistValue = (e) => {
  this.setState({
    artistName: e.target.value
  })
}

setSongValue = (e) => {
  this.setState({
    songTitle: e.target.value
  })
}

saveSongArtistValue = (e) => {
  e.preventDefault();

  axios({
    url: `https://theaudiodb.com/api/v1/json/1/searchtrack.php`,
    method: 'GET',
    responseType: 'json',
    params: {
      s:this.state.artistName,
      t:this.state.songTitle
    }
  }).then((results) => {
    console.log(results);
    const newSongArray = [...this.state.songArray, results.data.track[0].strTrack]
    
    // newSongArray.push(results.data.track[0].strTrack)
    
    this.setState({
      songArray: newSongArray,
      song:results.data.track[0].strTrack,
      songTitle: ""
    })
    console.log(this.state.songArray);
    
    const newArtistArray = [...this.state.artistArray, results.data.track[0].strArtist]
    // newArtistArray.push(results.data.track[0].strArtist)
    
    this.setState({
      artistArray: newArtistArray,
      artist:results.data.track[0].strArtist,
      artistName: "",
    })
    // after push save new song array into state
    
  }).catch(() =>{
    
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
  if (this.state.artist === "" || this.state.song === "") {
    Swal.fire({
      title: "Nothing to add to mix!",
      text: "Please Search for a Song",
      icon: "error",
      confirmButtonText: "Got it!",
    })
  } else  if (this.state.count < 10) {
    this.setState({
      updatedArtistArray: this.state.artistArray,
      updatedSongArray: this.state.songArray,
      count: this.state.count + 1,
      song: "",
      artist: ""
    })
  } else {
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





  render() {
    return (
      <div className="App">
        < Header />
        
        <main>
          <div className="wrapper">
            <div className="cassettePlaylist">

              < Cassettes mixName={this.state.tapeName} />
              
              < Playlist 
              songTitles={this.state.updatedSongArray}
              songArtists={this.state.updatedArtistArray}
              />
            </div>
            {this.state.isActive === true && (
              <MixNameForm 
              nameValue={this.state.nameValue}
              setNameValue={this.setNameValue}
              saveNameValue={this.saveNameValue}/>
            )}

            {this.state.isActive === false && (
                < SongSearch 
                songArtist={this.state.artistName}
                songValue={this.state.songTitle}
                setArtistValue={this.setArtistValue}
                setSongValue={this.setSongValue}
                saveSongArtistValue={this.saveSongArtistValue}
                />
              )}
          <div className="results">
              <p>{this.state.artist} - {this.state.song}</p>
            <button className="nameButton" onClick={this.addToArray} >Add to Mix</button>
          </div>
        </div>
        </main>

        < Footer />

      </div>
    );
  }
}

export default App;
