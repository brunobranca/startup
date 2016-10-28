import React from 'react';

class MovieList extends React.Component {
constructor (props) {
    super(props);
    this.renderM = this.renderM.bind(this);
  }

  render() {
    return (
      <ul>
        {this.renderMovie()}
      </ul>
    );
  }

  renderMovie(){
    let favourites = this.props.movie.filter(function(item){
      return item.favourite
    })
    return favourites.map(this.renderM);
  }

  renderM(item, index){
  return(
    <li key={index}>
      {`Title: ${item.title} Year: ${item.year} Duration: ${item.duration}`}
    </li>
  );
  }
};

MovieList.propTypes = {
   movies: React.PropTypes.array.isRequired
  };


export default MovieList;
