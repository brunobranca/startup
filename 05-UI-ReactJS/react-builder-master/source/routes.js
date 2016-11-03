import React, { Component } from 'react'
import Movie from './Movie'
import MovieList from './MovieList'
import MovieInput from './MovieInput'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class Rout extends Component {
 render() {
     return (
       <Router >
         <Route path='/' component={Movie} />
         <Route path='/MovieInput' component={MovieInput} />
         <Route path='/MovieList' component={MovieList} />
       </Router>
    )
  }
}
const NotFound = () => (
 <h1>404.. This page is not found!</h1>)

export default Rout;
