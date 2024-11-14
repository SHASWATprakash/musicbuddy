import React from 'react';
import AlbumList from './AlbumList';
import MovieList from './MovieList';

function App() {
  return (
    <div className="App">
      <h1>Music Albums and Bollywood Movies</h1>
      <AlbumList />
      <MovieList />
    </div>
  );
}

export default App;
