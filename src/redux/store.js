import { createStore } from "redux";
import listreducer from "./listreducer"








const store =createStore(listreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store 