import axios from 'axios'
import { Dispatch } from 'redux';

interface personObj {
  firstName: string;
  headshot: {
    alt: string;
    height: number;
    id:string;
    mimeType: string;
    type: string;
    url: string;
    width: number
  };
  id: string;
  jobTitle: string;
  lastName: string;
  slug: string;
  socialLinks: string[];
  type: string
}

interface IInitialState {
  people: personObj[];

}

interface actionType {
  type: string;
  people: personObj[];
  roundPeople: personObj[];
  realPerson: personObj;
}

const initialState = {
  people: [],
  roundPeople: [],
  realPerson: {},
};

//Action Constant
const GET_PEOPLE:string = 'GET_PEOPLE';
const GENERATE_ROUND_PEOPLE:string = 'GENERATE_ROUND_PEOPLE';
const SELECT_REAL_PERSON:string = 'SELECT_REAL_PERSON';

//Action Creator
export const getPeople = (people: personObj[]) => ({
  type: GET_PEOPLE,
  people
})

export const generateRoundPeople = (roundPeople: personObj[]) => {
    return {
      type: GENERATE_ROUND_PEOPLE,
      roundPeople
    }
}

export const selectRealPerson = (roundPeople: personObj[]) => {
  return {
    type: SELECT_REAL_PERSON,
    realPerson: roundPeople[Math.floor(Math.random() * roundPeople.length)]
  }
}

//Thunk (gets people from api)
export const fetchPeople = () => async( dispatch: Dispatch) => {
    const { data } = await axios.get('https://namegame.willowtreeapps.com/api/v1.0/profiles');
    // Clean data by removing people objects that have no image url or have a default image
    let cleanArray = data.filter((peopleObj: personObj) =>
      peopleObj.headshot.url &&
      peopleObj.headshot.alt !== "Logo" &&
      peopleObj.headshot.url !== "https://namegame.willowtreeapps.com/images/featured-image-TEST1.png"
    )

  // Add all the people in state
  dispatch(getPeople(cleanArray));

  // Select 6 people randomly from the people array
  let roundPeople: personObj[] = [];
    while(roundPeople.length < 6){
      let person = cleanArray[Math.floor(Math.random() * cleanArray.length)]
      if (!roundPeople.includes(person)) {
        roundPeople.push(person);
      }
    }

  // Add round people in state and select a real person then add it to state
  dispatch(generateRoundPeople(roundPeople));
  dispatch(selectRealPerson(roundPeople));
}

//Reducer
const peopleReducer = (state = initialState, action: actionType) => {
  switch(action.type) {
    case GET_PEOPLE:
      return {...state, people: action.people};
    case GENERATE_ROUND_PEOPLE:
      return {...state, roundPeople: action.roundPeople};
    case SELECT_REAL_PERSON:
      return {...state, realPerson: action.realPerson};
    default:
      return state;
  }
}

export default peopleReducer
