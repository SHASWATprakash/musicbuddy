import React from 'react';
import albums from '../data/albums.json';

const AlbumList = () => {
  return (
    <div>
      <h2>Music Albums (2020-2024)</h2>
      <ul>
        {albums.map((album, index) => (
          <li key={index}>{album.year} - {album.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;
