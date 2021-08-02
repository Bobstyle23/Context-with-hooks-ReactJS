import React, { useState } from "react";

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState("");
  //   const [artist, setArtist] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(title);
    setTitle("");
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Song Name: </label>
      <input type="text" onChange={handleChange} value={title} />

      <button type="submit">Add</button>
    </form>
  );
};

export default NewSongForm;
