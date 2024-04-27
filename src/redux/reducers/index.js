import { combineReducers } from "redux";
import { moviereducer } from "./movie";

export const reducer = combineReducers({
    movieData : moviereducer
})