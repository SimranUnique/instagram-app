import {postReducer} from "./post";
import {userReducer} from "./user";
import {combineReducers} from "redux";

export default combineReducers({
    user: userReducer,
    posts: postReducer
});