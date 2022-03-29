import React from "react"
import { connect } from "react-redux"
import { updateScore, updateRounds } from "../store/game"
import { fetchPeople } from "../store/people"
import Picture from "./Picture"

export class Game extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedPerson: {},
      renderOverlay: false,
    }
  }

  componentDidMount(){
    const { fetchPeople } = this.props;
    fetchPeople();
}

  pictureClickHandler = (id) => {
    const { selectedPerson } = this.state;
    const { roundPeople, updateScore, score, realPerson} = this.props;

    // When the user clicks on an image
    // check the id of the clicked image with the realPerson id
    // if they match, render the green overlay, else the red overlay
    // and render a white overlay in the other images
    if (!selectedPerson.id) {
      let selected = roundPeople.find(person => id === person.id)
      this.setState({
        selectedPerson: selected,
        renderOverlay: true,
        })
      }

      // If the ids match, increase the score
    if (id === realPerson.id) {
      updateScore(score + 1);
    }
  }

  continueClickHandler = () => {
    const {rounds, updateRound, history, fetchPeople} = this.props;

    // Update rounds and fetch new people
    updateRound(rounds);
    fetchPeople();

    // on the 6th round take the user to the scoreboard
    if (rounds === 5 ) {
      history.push(`/scoreboard`);
    } else {
      // If not yet on the 6th round
      // Clear component state
      this.setState({
        selectedPerson: {},
        renderOverlay: false,
      });
      // and navigate to the next round with the new data
      history.push(`/play/${rounds + 1}`);
    }
  }

  render() {
    const { roundPeople, realPerson } = this.props;
    const { selectedPerson, renderOverlay } = this.state;

    return (
      <div className="game">
        <h1>Which one of these good looking photos is the real</h1>
        {realPerson.firstName && <h2>{realPerson.firstName + " " + realPerson.lastName}</h2>}
        <div className="game-container">
          <div className="picture-container">
            {roundPeople.length === 0 ?
              <h1>Loading</h1> :
              roundPeople.map(person => {
                return (
                  <Picture
                    key={person.id}
                    id={person.id}
                    picture={person.headshot.url}
                    selector={this.pictureClickHandler}
                    renderOverlay={renderOverlay}
                    correct={selectedPerson.id === person.id && selectedPerson.id === realPerson.id}
                    incorrect={selectedPerson.id === person.id && selectedPerson.id !== realPerson.id}
                    />
                )
              })}
          </div>
          <button disabled={!this.state.selectedPerson.id} onClick={this.continueClickHandler}>Continue</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    people: state.people.people,
    roundPeople: state.people.roundPeople,
    realPerson: state.people.realPerson,
    score: state.game.score,
    rounds: state.game.round,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPeople: () => dispatch(fetchPeople()),
    updateScore: (num) => dispatch(updateScore(num)),
    updateRound: (round) => dispatch(updateRounds(round)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
