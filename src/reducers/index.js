import { combineReducers } from 'redux';
import Categories from '../reducers/Categories';
import Jokes from "../reducers/Jokes";

const ChuckNorrisApp = combineReducers({
    Categories,
    Jokes
});

export default ChuckNorrisApp;