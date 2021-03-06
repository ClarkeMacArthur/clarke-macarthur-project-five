
const SongSearch = (props) => {
    // declare props
    const { songArtist, songValue, setSongValue, setArtistValue, saveSongArtistValue } = props

    return (
        <div className="songFormContainer">
            <h2>Search for Songs!</h2>
            {/* form to collect songTitle and artistName for the axios call to AudioDB API */}
            <form
                onSubmit={saveSongArtistValue}
                className="songForm"
                action="submit"
                id="songForm">
                
                    <label htmlFor="searchSong" sr-only="Search for a song! Type artist and song title, separated by a comma"></label>

                    <input
                        type="text"
                        id="searchSong"
                        placeholder="Artist Name"
                        onChange={setArtistValue}
                        value={songArtist} />

                    <input
                        type="text"
                        id="searchSong"
                        placeholder="Song Title"
                        onChange={setSongValue}
                        value={songValue} />

                <div>
                    <button className="nameButton">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SongSearch