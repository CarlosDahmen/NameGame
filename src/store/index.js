import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import peopleReducer from "./people"
import thunk from "redux-thunk";
import gameReducer from "./game";

let middleware = [
  thunk,
]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({ people: peopleReducer, game: gameReducer });

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)))

export default store
