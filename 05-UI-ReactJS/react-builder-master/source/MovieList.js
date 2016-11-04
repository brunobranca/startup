import React from 'react'
import Rout from './routes'
import Movie from './Movie'

class MovieList extends React.Component {
  constructor (props) {
    super(props);
debugger;
    this.renderItem = this.renderItem.bind(this);
  }

  render() {
    return (

      <ul>
        <Movie />
        {this.renderItems()}
      </ul>

    );
  }

  renderItems () {
    let movies = JSON.parse(localStorage.getItem('movieStorage'));
    return movies.map(this.renderItem);
  }

  renderItem (item, index) {
    return (
      <div>
        <li key={index}>
          {`Title: ${item.title} Year: ${item.year} Duration: ${item.duration}`}
        </li>
      </div>
    );
  }
};

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};

export default MovieList;
