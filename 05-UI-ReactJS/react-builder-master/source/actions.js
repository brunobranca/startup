const MOVIE_INPUT = 'ovie_input'
const MOVIE_LIST = 'movie_list'
const MOVIE_EDIT = 'movie_edit'

export function MovieInput(movie) {
  return { type: 'MOVIE_INPUT', movie: movie }
}

export function MovieEdit(index) {
  return { type: 'MOVIE_EDIT', index }
}

export function MovieList(text) {
  return { type: 'MOVIE_LIST', text }
}

export {MOVIE_INPUT, MOVIE_LIST, MOVIE_EDIT };
