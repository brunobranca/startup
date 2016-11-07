import React from 'react'
import Rout from './routes'
import Movie from './Movie'
import moviesStore from './moviesStore'
import { connect } from 'react-redux';
import { handleM } from './reducers.js';
import { Link } from 'react-router';
import { movieList } from './actions';

class MovieList extends React.Component {
  constructor () {
    super();

    this.renderItem = this.renderItem.bind(this);
  }

  render() {
    return (
      <div>
        <Movie />
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    );
  }

  renderItems () {
     let movies;
     movies = moviesStore.getState();
     if(movies !== null){
       return movies.map(this.renderItem);
     }
     return (
       <li />
     )
   }

   renderItem (item, index) {
     let boundItemClick = this.initializeState;
     return (
       <li key={index}>
         {`Title: ${item.title} Year: ${item.year} Duration: ${item.duration}`}
         <Link to={`MovieInput/${index}`}><button className="buttonSelect">Edit</button></Link>
       </li>
     );
   }
 };

export default MovieList;
