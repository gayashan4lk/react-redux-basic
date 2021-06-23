import {combineReducers} from "redux";
import UserReducer from "./reducer-users";
import MovieReducer from "./reducer-movies"

const allReducers = combineReducers({
    users: UserReducer,
    movies: MovieReducer
});

export default allReducers;