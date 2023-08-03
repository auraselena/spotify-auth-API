import data from "../db.json";
import { useEffect, useState } from "react";

const SongCard = () => {
  const [songData, setSongData] = useState([]);

  useEffect(() => {
    // console.log("data", data.songs);
    setSongData(data.songs);
  },[]);

  const showData = () => {
    return songData.map((song) => {
      return (
        <>
          <div className="song card">
            <img src={song.url} alt="" />
            <h4 id="title">{song.title}</h4>
            <h5 id="artist">{song.artist}</h5>
          </div>
        </>
      );
    });
  };

  return showData();
};

export default SongCard;
