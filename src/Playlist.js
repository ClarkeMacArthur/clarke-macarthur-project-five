import {Component} from 'react';
import jcard from './Assets/jcard2.jpg'

class Playlist extends Component {
    render() {
        return(
            <div className="playlist">
                <div className="songListContainer">
                <ul className="songList1">
                    <li><p>Lisa Loeb - Stay</p></li>
                    <li><p>Queen - Bohemian Rhapsody</p></li>
                    <li><p>Carly Rae Jepsen - Call Me Maybe </p></li>
                    <li><p>Panic! At the Disco - I Write Sins not Tragedies</p></li>
                    <li><p>City Girl - Ji-Eun's Sunset</p></li>
                </ul>
                    <ul className="songList2">
                    <li><p>Incubus - Stellar</p></li>
                    <li><p>Lenka - Everything At Once</p></li>
                    <li><p>Lenka - The Show</p></li>
                    <li><p>Sara Bareilles - Gavity</p></li>
                    <li><p>Sara Bareilles - King of Anything</p></li>
                </ul>
                </div>
                
                <img className ="trackCard" src={jcard} alt="a cassette tape track card. It is a white card with two lined lists, 'Side A' and 'Side B'. This is where the list of songs is displayed."/>
            
            </div>
        )
    }
}

export default Playlist;