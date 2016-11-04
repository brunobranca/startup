import reducers from './reducers.js'
import { createStore } from 'redux'

let moviesStore = createStore(reducers);
export default moviesStore;
