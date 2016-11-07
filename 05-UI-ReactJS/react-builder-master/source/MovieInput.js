import React from 'react';
import moviesStore from './moviesStore';
import Movie from './Movie';
import {movieInput, initializeState} from './actions';
import { connect } from 'react-redux';
import handleM from './reducers.js';

class MovieInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      year: this.props.year,
      duration: this.props.duration,
      favourite: this.props.favourite
    }

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
  moviesStore.dispatch(movieInput(this.state))
  }

  render() {
    return (
      <div>
            <Movie/>Movie<br/><br/>
              <label>Title: </label>
                <input type="text" placeholder= {this.props.title||"Title"} name="title" value={this.props.title} onChange={this.handleChangeTitle} /><br /><br />
              <label>Year: </label>
                <input type="number" min="1900" max="2016" placeholder= {this.props.year||"Year"} name="year" value={this.props.year} onChange={this.handleChangeYear} /><br /><br />
              <label>Duration: </label>
                <input type="time" placeholder={this.props.duration||"Duration"} name="duration" value={this.props.duration} onChange={this.handleChangeDuration}/><br /><br />
              <label />Mark as favourite <input type="checkbox" checked={this.state.favourite} onChange={this.handleFavourite} /> <br /> <br />
              <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    );
  }
};

export default MovieInput;