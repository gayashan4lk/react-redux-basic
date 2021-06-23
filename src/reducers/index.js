import {combineReducers} from "redux";
import UserReducer from "./reducer-users";
import MovieReducer from "./reducer-movies"
import ActiveUserReducer from "./reducer-active-user";

const allReducers = combineReducers({
    users: UserReducer,
    movies: MovieReducer,
    activeUser: ActiveUserReducer
});

export default allReducers;