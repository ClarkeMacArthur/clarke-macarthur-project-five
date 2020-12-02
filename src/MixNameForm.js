import { Component } from 'react';

const MixNameForm = (props) => {

    return (
        <div className="stepOne">
            <h2>Name your mix!</h2>

            <form className="nameForm" action="submit" id="nameForm">
                <div className="nameContainer">
                    <label htmlFor="getName" sr-only="name your mix tape!"></label>
                    <input 
                    type="text"
                    id="getName"
                    placeholder="ex. Awesome Mix Vol. 1"/>
                    <p>max. length 20 characters</p>
                </div>
                <div>
                    <button 
                    className="nameButton"
                    type="submit">Submit
                    </button>
                </div>
            </form>
        </div>
    )

}

export default MixNameForm;