import { Component } from 'react';
import './App.css';
import Cassettes from './Casettes';
import Header  from './Header.js';
import Playlist from './Playlist';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Header />
        
        <main>
        <div className="wrapper">
        <div className="cassettePlaylist">

        < Cassettes />
        < Playlist />
        </div>
        </div>
        </main>

      </div>
    );
  }
}

export default App;
