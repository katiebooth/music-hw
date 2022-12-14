import Song from "./Song"


const SongList = ({songs}) => {

    const songItems =songs.feed.entry.map((song, index) => {
            return <Song song={song} key={index} />
    });

        return (
        <ol>{songItems}</ol>
    )
}


export default SongList