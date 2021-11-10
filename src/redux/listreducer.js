
  
import { combineReducers } from "redux";
import { reducerMovie, reducerphoto } from "./reducer";

const listreducer =combineReducers({
    allphoto: reducerphoto,
    allmovie:reducerMovie
})
export default listreducer;
