import React from 'react';
import './App.css';
import AlbumList from './components/AlbumList';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Music Albums and Bollywood Movies (2020-2024)</h1>
      </header>
      <main>
        <section>
          <AlbumList />
        </section>
        <section>
          <MovieList />
        </section>
      </main>
    </div>
  );
}

export default App;
