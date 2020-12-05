import {Component} from 'react';
import jcard from './Assets/jcard2.jpg'

class Playlist extends Component {
    
    render() {
        
        // console.log(this.props.songArtists[0]);
        return(
            <div className="playlist">
                <div className="songListContainer">

                <ul className="songList1">
                    
                    <li><p>{this.props.songArtists[0]} - {this.props.songTitles[0]}</p></li>
                    <li><p>{this.props.songArtists[1]} - {this.props.songTitles[1]}</p></li>
                    <li><p>{this.props.songArtists[2]} - {this.props.songTitles[2]}</p></li>
                    <li><p>{this.props.songArtists[3]} - {this.props.songTitles[3]}</p></li>
                    <li><p>{this.props.songArtists[4]} - {this.props.songTitles[4]}</p></li>
                </ul>
                <ul className="songList2">
                    <li><p>{this.props.songArtists[5]} - {this.props.songTitles[5]}</p></li>
                    <li><p>{this.props.songArtists[6]} - {this.props.songTitles[6]}</p></li>
                    <li><p>{this.props.songArtists[7]} - {this.props.songTitles[7]}</p></li>
                    <li><p>{this.props.songArtists[8]} - {this.props.songTitles[8]}</p></li>
                    <li><p>{this.props.songArtists[9]} - {this.props.songTitles[9]}</p></li>
                </ul>
                </div>
                
                <img className ="trackCard" src={jcard} alt="a cassette tape track card. It is a white card with two lined lists, 'Side A' and 'Side B'. This is where the list of songs is displayed."/>
            
            </div>
        )
    }
}

export default Playlist;