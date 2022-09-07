import SongList from "../Components/SongList"
import {useEffect, useState} from "react"

const SongContainer = () => {

const [songs, setSongs] = useState([]);

useEffect(() => {
    getSongs()},[]
)

const getSongs = function(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then((response) => {

        return response.json()

    }).then((songs) =>setSongs(songs))

}

return (
  <>
    <h2>Top 20</h2>

    {songs.feed ?   <SongList songs={songs} />: null}
  </>
)




}







export default SongContainer