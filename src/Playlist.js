import {Component} from 'react';
import jcard from './Assets/jcard2.jpg'

class Playlist extends Component {
    render() {
        return(
            <div className="playlist">
                
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <img className ="trackCard" src={jcard} alt="a cassette tape track card. It is a white card with two lined lists, 'Side A' and 'Side B'. This is where the list of songs is displayed."/>
            </div>
        )
    }
}

export default Playlist;