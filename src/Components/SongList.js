import Song from "./Song"


const SongList = ({songs}) => {

    const songItems =songs.feed.entry.map((song) => {
            return <Song song={song} key={songs.feed.entry.id.attributes["im:id"]} />
    });

        return (
        <ul>{songItems}</ul>
    )
}


export default SongList