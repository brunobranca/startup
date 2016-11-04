import {MOVIE_INPUT, MOVIE_LIST, MOVIE_EDIT} from './actions'

const reducers = (state = [{ moviesState:{} }], action) => {
  switch (action.type) {
    case MOVIE_INPUT:
    state.moviesState = JSON.parse(localStorage.getItem("movies")) || [];
    state.moviesState.push(action.movies);
    localStorage.setItem('movieStorage', JSON.stringify(state.moviesState));

    case MOVIE_EDIT:

    case MOVIE_LIST:

    default:
      return state;
  }
}

export default reducers;
