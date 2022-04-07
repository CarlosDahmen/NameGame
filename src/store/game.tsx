export interface IInitialGameState {
  round: number;
  score: number;
}

interface actionType {
  type: string;
  score?: number;
  round?: number;
}

const initialState: IInitialGameState = {
  round: 1,
  score: 0,
}

//Action Constants
const UPDATE_SCORE = 'UPDATE_SCORE';
const UPDATE_ROUNDS = 'UPDATE_ROUNDS';
const RESET_GAME = 'RESET_GAME';


//Action Creators
export const updateScore = (score: number): actionType => ({
  type: UPDATE_SCORE,
  score
})

export const updateRounds = (round: number): actionType => ({
  type: UPDATE_ROUNDS,
  round: round + 1
})

export const resetGame = (): actionType => ({
  type: RESET_GAME,
  round: 1,
  score: 0
})



//Reducer
const gameReducer = (state = initialState, action: actionType) => {
  switch(action.type) {
    case UPDATE_SCORE:
      return {...state, score: action.score };
    case UPDATE_ROUNDS:
      return {...state, round: action.round };
    case RESET_GAME:
      return {...state, score: action.score, round:action.round};
    default:
      return state;
  }
}

export default gameReducer
