import { Component } from 'react';
import './App.css';
import Cassettes from './Casettes';
import Header  from './Header.js';
import MixNameForm from './MixNameForm';
import Playlist from './Playlist';
import SongSearch from './SongSearch';

class App extends Component {

  constructor() {
    super();
    this.state = {
      nameValue: "",
      tapeName: "",
      songList: []      
    }
  }


  setNameValue = (e) => {
    // console.log(e.target.value)
    this.setState({
      nameValue: e.target.value
    })
  }

  saveNameValue =(e) => {
    e.preventDefault();
    // not working, figure out why
    document.querySelector('input').value = '';

    this.setState({
      tapeName: this.state.nameValue
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
        </div>
        <MixNameForm 
        nameValue={this.state.nameValue}
        setNameValue={this.setNameValue}
        saveNameValue={this.saveNameValue}/>

        < SongSearch />
        </main>

      </div>
    );
  }
}

export default App;
