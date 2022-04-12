import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import peopleReducer, { IInitialPeopleState } from "./people"
import thunk from "redux-thunk";
import gameReducer, { IInitialGameState } from "./game";

export interface IInitialState {
  game: IInitialGameState;
  people: IInitialPeopleState;
}

let middleware = [
  thunk,
]

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({ people: peopleReducer, game: gameReducer });

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)))

export default store
