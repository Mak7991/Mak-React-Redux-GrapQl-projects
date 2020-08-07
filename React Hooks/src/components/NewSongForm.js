import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');
  // useState can be used multiple times for different data
//   const [artist, setArtist] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(title);
    setTitle('');
    addSong(title);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Song name:</label>
      <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type='submit' value='add' />
    </form>
  );
}
 
export default NewSongForm; 