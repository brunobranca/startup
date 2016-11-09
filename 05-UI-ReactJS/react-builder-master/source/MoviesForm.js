import React from 'react'
import Rout from './routes'
import Movie from './Movie'
import moviesStore from './moviesStore'
import { connect } from 'react-redux';
import { handleM } from './reducers.js';
import { Link } from 'react-router';
import { movieDelete } from './actions';
import MovieList from './MovieList';

class MoviesForm extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Movie />
        <MovieList movies={this.props.movies} onDelete={this.removeMovie}/>
      </div>
    );
  }

  removeMovie(index){
    moviesStore.dispatch(movieDelete(index))
  }
};

function mapStateToProps(state) {
 return {
   movies: state
 };
}


export default connect(mapStateToProps)(MoviesForm);
