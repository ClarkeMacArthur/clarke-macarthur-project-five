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
      songList: [],
      artistList: [],    
      songArray: [],
      artistArray: [],
      updatedSongArray: [],
      updatedArtistArray: []
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
    // console.log(e.target.value)
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
    const newSongArray = [...this.state.songList, results.data.track[0].strTrack]
    // newSongArray.push(results.data.track[0].strTrack)

    this.setState({
      songArray: newSongArray
    })

    const newArtistArray = [...this.state.artistList, results.data.track[0].strArtist]
    // newArtistArray.push(results.data.track[0].strArtist)
    
    this.setState({
      artistArray: newArtistArray
    })
    // after push save new song array into state

    
  });
}

addToArray = (e) => {
  this.setState({
    updatedArtistArray: this.state.artistArray
  })
}





  render() {
    return (
      <div className="App">
        < Header />
        
        <main>
          <div className="wrapper">
            <div className="cassettePlaylist">

              < Cassettes mixName={this.state.tapeName} />
              < Playlist />
            </div>
            {this.state.isActive === true && (
              <MixNameForm 
              nameValue={this.state.nameValue}
              setNameValue={this.setNameValue}
              saveNameValue={this.saveNameValue}/>
            )}

            {this.state.bandNameCapture !== "" &&
              this.state.isActive === false && (
                < SongSearch 
                songArtist={this.state.artistName}
                songValue={this.state.songTitle}
                setArtistValue={this.setArtistValue}
                setSongValue={this.setSongValue}
                saveSongArtistValue={this.saveSongArtistValue}
                />
              )}
          <div className="results">
              <p>{this.state.artistArray} - {this.state.songArray}</p>
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
