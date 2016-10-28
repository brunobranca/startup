import React from 'react';
import ReactDOM from 'react-dom';
import MovieForm from './MovieForm';
import MovieList from './MovieList';

class Movie extends React.Component {
  render () {
   return (

   <div className="movie">
            <Movie onSubmit={this.handleMovieSubmit} /> <br />
            <MovieList movies={this.getMovies()} />
            <h3 id="favouriteListTitle" />
            <ul id="list" />
            <MovieEdit movies={this.getMovies()} />
        </div>
    );
  }

  getMovies () {
    let movies = localStorage.getItem("movieStorage") || [];

    return JSON.parse(movies);
  }

  handleMovieSubmit (event) {
    let movies = JSON.parse(localStorage.getItem("movieStorage")) || [];
    movies.push(event);
    localStorage.setItem("movieStorage", JSON.stringify(movies));
  }
};

export default Movie;
