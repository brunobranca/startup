import {MOVIE_INPUT, MOVIE_EDIT, MOVIE_DELETE, INITIALIZE_STATE} from './actions'

function handleM(state = [ { movies: {} } ], action) {
  console.log(action, MOVIE_INPUT);

  let movies = JSON.parse(localStorage.getItem("movieStorage")) || [];
  switch (action.type) {

    case INITIALIZE_STATE:
      state = movies;
      return(state);

    case MOVIE_INPUT:
    state.push(action.movie);
    localStorage.setItem("movieStorage", JSON.stringify(state));
    return (state)

    case MOVIE_EDIT:
    console.log(state[action.movie.index].title)
    state[action.movie.index] = action.movie
    console.log(state[action.movie.index].title)
    localStorage.setItem("movieStorage", JSON.stringify(state));
    return(state)

    case MOVIE_DELETE:
    state.splice(action.index, 1);
    localStorage.setItem("movieStorage", JSON.stringify(state));

    default:
      return state;
  }
}

export default handleM;
