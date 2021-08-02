import React, { useState } from "react";
import uuid from "uuid";
import NewSongForm from "./NewSongForm";

function SongList() {
  const [songs, setSongs] = useState([
    { title: "Almost home", id: 1 },
    { title: "Memory Gospel", id: 2 },
    { title: "This wild darkness", id: 3 },
  ]);

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
  };
  return (
    <div>
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
}

export default SongList;
