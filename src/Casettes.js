import { Component } from 'react';
import tape1 from './Assets/tape1.svg';
import tape2 from './Assets/tape2.svg';
import tape3 from './Assets/tape3.svg';
import tape4 from './Assets/tape4.svg';
import tape5 from './Assets/tape5.svg';
import tape6 from './Assets/tape6.svg';
import rightArrow from './Assets/rightArrow.svg'
import leftArrow from './Assets/leftArrow.svg'
import './App.css'; 


class Cassettes extends Component {
    constructor(){
        super()
        // Create an array of the cassette tape images
        this.state = {
            tapeImages: [
                {
                    id: 1,
                    src: tape1,
                    alt:"a light sea green audio cassette tape with a yellow, white and font label that reads 'Stereo tape' and 'A' (for side A)"
                },
                {
                    id: 2,
                    src: tape2,
                    alt:"an orange audio cassette tape with a yelow label with a white stripe at the top that has the letter A and a black underline to label the name of the cassette. It also says 'audio' at the bottom center and has the number 45 in the bottom right corner"
                },
                {
                    id: 3,
                    src: tape3,
                    alt: "a grey audio cassette tape with a white label. There is a rainbow stripe across the horizontal middle of the cassette. At the top there is the capital letter A with underline space to label your tape. Across the bottom of the label it reads '90 minute stereo'"
                },
                {
                    id: 4,
                    src: tape4,
                    alt:"a bright lime green audio cassette tape with two yellow labels, one at the top that has a white stripe to label the name of your tape, and one at the bottom that reads in darker green letters:'Side A, Low Noise, 45'"
                },
                {
                    id: 5,
                    src: tape5,
                    alt: "a blue audio cassette tape with an orangered label that has a white strip across the top to label your tape's name. On the left side there are two white check boxes with white text labels in and out. On the right side is the letter A in white text to indicate that this is side A of the tape."
                },
                {
                    id: 6,
                    src: tape6,
                    alt: "a light coral pink audio cassette tape that has a light blue label. There is a white strip across the top to label the name of your tape. At the bottom in white text it reads:'super stereo, A, 90'"
                }
            ],
            mixName:"Awesome Mix Vol. 1",
            // counter that increases/decreases with button click. Used to reference the images on the array
            count: 0,
        }
    }

    // Event handlers for the button click that advances to the next tape or goes back to the previous one

        prevCassette = (e) => {
            if (this.state.count > 0) {
                this.setState({
                    count: this.state.count - 1
                }) 
            }
        }

        nextCassette =(e) => {
            if (this.state.count < 5) {
                this.setState({
                    count:this.state.count + 1
                })
            } 
        }

    
    render() {
        
        return (
            <div className="cassette">
                <p class="tapeName">{this.state.mixName}</p>

                <img className="cassetteTape" src={this.state.tapeImages[this.state.count].src} alt={this.state.tapeImages[this.state.count].alt}/>

                {/* button to cycle through different cassette images in the array */}
                <div className="buttonFlex">

                <button className="tapeButton" onClick={this.prevCassette}><img src={leftArrow} alt="left pointing arrow, click to select the previous cassette"/></button>

                <p>Choose Your Tape!</p>

                <button className="tapeButton" onClick={this.nextCassette}><img src={rightArrow} alt="right pointing arrow, click to select the next cassette"/></button>

                </div>
            </div>
        )
    }
}

export default Cassettes;