


const Song = ({song}) => {
    return (
      <h1>
 
          <li>{song["im:name"].label}   <br></br>{song["im:artist"].label}</li>
            <img src={song["im:image"][2].label}></img>        

      </h1>
    )


}

export default Song