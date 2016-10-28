import React from 'react';

class MovieForm extends React.Component {
 constructor(props) {
   super(props);
   this.state = {title: "", year: "", duration: "", favourite: false};
   this.handleChangeTitle = this.handleChangeTitle.bind(this);
   this.handleChangeYear = this.handleChangeYear.bind(this);
   this.handleChangeDuration = this.handleChangeDuration.bind(this);
   this.handleFavourite = this.handleFavourite.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleCancel = this.handleCancel.bind(this);
 }
 handleChangeTitle(event) {
   this.setState( {title: event.target.value});
 }
 handleChangeYear(event) {
   this.setState( {year: event.target.value});
 }
 handleChangeDuration(event) {
   this.setState( {duration: event.target.value});
 }
 handleFavourite (event) {
   this.setState({favourite: event.target.checked})
 }
 handleSubmit(event) {
   if (this.props.onSubmit) {
      this.props.onSubmit(this.state);
    }
 }
 handleCancel(event) {
   if (this.props.onDelete) {
     this.props.onDelete(this.state);
   }
 }
 render() {
   return (
     <div><label>What´s your favorite movie? </label> <br/>
     <br/>
     <label>Movie title: </label>
     <input id= "title" type="text" placeholder="Movie Title" value={this.state.title} onChange={this.handleChangeTitle} /><br/>
     <label>Movie year: </label>
     <input id= "year" type= "number" min= "1900" max="2016" placeholder="Year" value={this.state.year} onChange={this.handleChangeYear} /><br/>
     <label>Movie Duration: </label>
     <input id= "duration" type="time" min= "00:00" max= "09:00" placeholder="Movie Duration" value={this.state.duration} onChange={this.handleChangeDuration} /><br/>
     <label />Mark as favourite <input type="checkbox" value={this.state.favourite} onChange={this.handleFavourite} /> <br/> <br/>
     <button onClick={this.handleSubmit.bind(this)}>Submit</button>
     <button onClick={this.handleCancel.bind(this)}>Cancel</button>
     </div>
   );
 }
};

export default MovieForm;
