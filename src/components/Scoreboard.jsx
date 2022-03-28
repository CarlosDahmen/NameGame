import { connect } from "react-redux"
import { resetGame } from "../store/game";

const Scoreboard = (props) => (
  <div className="game">
    <h2 id="score-message">
      Congratulations,
      <br/> you scored {props.score}/5
    </h2>
    <button onClick={(evt) => {
      evt.preventDefault();
      props.resetGame()
      props.history.push(`/homepage`)
    }} className="play-button" type="button">Return to Home</button>
    <div className="stats">
      <div>
        Correct Selections
        {props.score*20}%
      </div>
      <div>
      Incorrect Selections
        {(5 - props.score)*20}%
      </div>
    </div>
  </div>
)

const mapStateToProps = state => {
  return {
    score: state.game.score,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetGame: () => dispatch(resetGame())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard)
