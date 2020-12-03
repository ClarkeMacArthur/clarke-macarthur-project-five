import { Component } from 'react';

const MixNameForm = (props) => {

    const { nameValue, setNameValue, saveNameValue } = props
        
    return (
            <div className="nameFormContainer">
                <h2>Name your mix!</h2>
    
                <form 
                onSubmit={saveNameValue}
                className="nameForm" 
                action="submit" 
                id="nameForm">
                    <div className="nameContainer">
                        <label htmlFor="getName" sr-only="name your mix tape!"></label>

                        <input 
                        type="text"
                        id="getName"
                        maxLength = "20"
                        placeholder="ex. Awesome Mix Vol. 1"
                        onChange={setNameValue}
                        value={nameValue} />

                        <p>max. length 20 characters</p>
                    </div>
                    <div>
                        <button className="nameButton">Submit</button>
                    </div>
                </form>
            </div>
        )
}

export default MixNameForm;