import React from 'react';
import ReactDOM from 'react-dom';
import MovieInput from './MovieInput';
import MovieList from './MovieList';
import MovieEdit from './MovieEdit';

class Movie extends React.Component{
  render () {
    return (
        <div className="movie">
            <MovieInput onSubmit={this.handleMovieInputSubmit} /> <br />
            <MovieList movies={this.getMovies()} />
            <h3 id="favouriteListTitle" />
            <ul id="list" />
        </div>
    );
  }
  // <MovieEdit movies={this.getMovies()} onSubmit={this.handleUpdateMovie} />
  getMovies () {
    let movies = [];

     if (localStorage.getItem('movieStorage')) {
       movies = JSON.parse(localStorage.getItem('movieStorage'));
     }
     return movies;
   }

  handleMovieInputSubmit (event) {
    let movies = JSON.parse(localStorage.getItem("movieStorage")) || [];
    movies.push(event);
    localStorage.setItem("movieStorage", JSON.stringify(movies));
  }

  handleUpdateMovie (index) {
    let movies = JSON.parse(localStorage.getItem("movieStorage"));
    return(movies[index]);
  }
};

export default Movie;
