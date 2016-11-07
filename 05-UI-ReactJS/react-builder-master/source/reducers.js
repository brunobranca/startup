import {MOVIE_INPUT, MOVIE_LIST, MOVIE_EDIT, INITIALIZE_STATE} from './actions'

function handleM(state = [ { movies: {} } ], action) {
  console.log(action, MOVIE_INPUT);

  let movies = JSON.parse(localStorage.getItem("movieStorage")) || [];
  switch (action.type) {

    case INITIALIZE_STATE:
      state = movies;
      console.log(state);
      return(state);

    case MOVIE_INPUT:
    console.log(action.movie)
    state.push(action.movie);
    localStorage.setItem("movieStorage", JSON.stringify(state));
    return (state)

    case MOVIE_EDIT:

    case MOVIE_LIST:

    default:
      return state;
  }
}

export default handleM;
