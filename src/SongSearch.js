
const SongSearch = (props) => {

    const { songArtist, songValue, setSongValue, setArtistValue, saveSongArtistValue } = props

    return (
        <div className="songFormContainer">
            <h2>Search for Songs!</h2>

            <form
                onSubmit={saveSongArtistValue}
                className="songForm"
                action="submit"
                id="songForm">
                <div className="nameContainer">
                    <label htmlFor="searchSong" sr-only="Search for a song! Type artist and song title, separated by a comma"></label>

                    <input
                        type="text"
                        id="searchSong"
                        placeholder="Artist Name"
                        onChange={setArtistValue}
                        value={songArtist} />

                    <p>ex: Queen, Bohemian Rhapsody </p>

                    <input
                        type="text"
                        id="searchSong"
                        placeholder="Song Title"
                        onChange={setSongValue}
                        value={songValue} />
                </div>
                <div>
                    <button className="nameButton">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SongSearch