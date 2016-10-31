import React from 'react';
import MovieInput from './MovieInput';

class MovieEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {isSelect : false};
    //this.handleChangeTitle = this.handleChange.bind(this);
    this.renderMovie = this.renderMovie.bind(this);
  }

  handleClick () {

  }

  render() {
    return (
      <div>
        {this.renderMovies()}
      </div>
    );
  }

  // renderScrollable (item, index, isSelected) {
  //   console.log(this.props.movies)
  //   let isSelected = this.state.isSelected;
  //   if (isSelected) {
  //       alert("a")
  //   }
  //   return (
  //     <div key={index}>
  //       <li onClick={isSelected=true}>{item.title}</li>
  //     </div>
  //   )
  // }

  handleUpdateTitle (props) {
    console.log(this.props.movies);
  }

  renderMovies () {
    let isSelected = false;
    return (
      // this.props.movies.map(this.renderScrollable.bind(this))
      // if(isSelected)
    this.props.movies.map(this.renderMovie)
    )
  }
  handleSubmit(event) {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state);
    }
  }

  renderMovie (item, index) {
    return (
      <div key={index}>
        <br />
        <input type="text" name="title" value={this.state} onChange={this.handleUpdateTitle.bind(this)}></input>
        <input type="text" name="year" value={this.state} />
        <input type="text" name="duration" value={this.state} />
        <label /> Favourite <input type="checkbox" checked={this.state} />
        <button onClick={this.handleSubmit.bind(this)}>Edit</button>
      </div>
    )
  }

};

  MovieEdit.propTypes = {
  movies: React.PropTypes.array.isRequired
};

export default MovieEdit;
