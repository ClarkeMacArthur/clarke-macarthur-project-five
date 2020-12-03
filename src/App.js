import { Component } from 'react';
// ********Import Packages*******
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
      songList: []      
    }
  }

  

  handleHide = () => {
    this.setState({
      isActive: false,
    });
  };



  setNameValue = (e) => {
    // console.log(e.target.value)
    this.setState({
      nameValue: e.target.value
    })
  }

  saveNameValue =(e) => {
    e.preventDefault();

    if (this.state.nameValue === "") {
      Swal.fire({
        title: 'Missing info',
        text: 'Enter a name for your mix!',
        icon: 'error',
        confirmButtonText: 'Okay',
      }); 

    } else {
      
      this.setState({
        tapeName: this.state.nameValue
      }, () => {
        this.setState({
          nameValue: ''
        });
      });

      this.handleHide();
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
                < SongSearch />
              )}
          <div className="results">
            <p>Lisa Loeb - Stay</p>
            <button className="nameButton">Add to Mix</button>
          </div>
        </div>
        </main>

        < Footer />

      </div>
    );
  }
}

export default App;
