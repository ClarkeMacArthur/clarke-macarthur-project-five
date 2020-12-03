import { Component } from 'react';

const SongSearch = (props) => {

    const { songArtist, songValue, setSongValue, saveSongValue } = props

    return (
        <div className="songFormContainer">
            <h2>Search for Songs!</h2>

            <form
                onSubmit={saveSongValue}
                className="songForm"
                action="submit"
                id="songForm">
                <div className="nameContainer">
                    <label htmlFor="searchSong" sr-only="Search for a song! Type artist and song title, separated by a comma"></label>

                    <input
                        type="text"
                        id="searchSong"
                        placeholder="Artist Name, Song Title"
                        onChange={setSongValue}
                        value={songArtist, songValue} />

                    <p>ex: Queen, Bohemian Rhapsody </p>
                </div>
                <div>
                    <button className="nameButton">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SongSearch