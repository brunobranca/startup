import React, { Component } from 'react';
import Movie from './Movie';
import MovieList from './MovieList';
import MovieInput from './MovieInput';
import MoviesForm from './MoviesForm';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import moviesStore from './moviesStore';

class Rout extends Component {
 render() {
     return (
      <div>
        <Provider store={moviesStore}>
          <Router history = {browserHistory}>
            <Route path='/' component={Movie} />
              <Route path='/MovieInput' component={MovieInput} />
              <Route path='/MovieInput/:item' component={MovieInput} />
              <Route path='/MoviesForm' component={MoviesForm} />
          </Router>
        </Provider>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    todo: App(state.movie)
  };
}

export default Rout;
