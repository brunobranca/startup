import React from 'react';
import Rout from './routes'
import moviesStore from './moviesStore'
import Movie from './Movie'
import {MOVIE_INPUT} from './actions'

class MovieInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "",year: "",duration: "", favourite: false};
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeDuration = this.handleChangeDuration.bind(this);
    this.handleFavourite = this.handleFavourite.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }

  handleChangeYear(event) {
    this.setState({year: event.target.value});
  }

  handleChangeDuration(event) {
    this.setState({duration: event.target.value});
  }

  handleFavourite (event) {
    this.setState({favourite: event.target.checked})
  }

  handleSubmit(event) {
  moviesStore.dispatch(MovieInput(event))
  }

  render() {
    return (
      <div>
            <Movie/>Movie<br/><br/>
              <label>Title: </label>
                <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChangeTitle} /><br /><br />
              <label>Year: </label>
                <input type="number" min="1900" max="2016" placeholder="Year" name="year" value={this.state.year} onChange={this.handleChangeYear} /><br /><br />
              <label>Duration: </label>
                <input type="time" placeholder="Duration" name="duration" value={this.state.duration} onChange={this.handleChangeDuration}/><br /><br />
              <label />Mark as favourite <input type="checkbox" checked={this.state.favourite} onChange={this.handleFavourite} /> <br /> <br />
              <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    );
  }
};

export default MovieInput;
