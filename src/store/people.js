import axios from 'axios'

const initialState = []

//Action Constant
const GET_PEOPLE = 'GET_PEOPLE'

//Action Creator
const getPeople = people => ({
  type: GET_PEOPLE,
  people
})

//Thunk (gets people from api)
export const getPeople = people => {
  return async (dispatch) => {
    const { data } = await axios.get('https://namegame.willowtreeapps.com/api/v1.0/profiles', people);
    dispatch(getPeople(data))
  }
}

//Reducer
const peopleReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_PEOPLE:
      return [...state, action.people];
    default:
      return state;
  }
}

export default peopleReducer
