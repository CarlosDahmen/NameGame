import { connect } from "react-redux"
import { resetGame } from "../store/game";
import triangle from '../images/triangle.png';
import square from '../images/square.png';
import star from '../images/star.png';
import { History } from 'history';
import { IInitialState } from '../store/index';
import { Dispatch } from 'redux';

interface IProps {
  score: number;
  history: History;
  resetGame: () => void;
}

const Scoreboard: React.FunctionComponent<IProps> = (props) => (
  <div className="game">
    <div className="score">
      <img className="logo" src={square} alt='square'/>
      <br/>
      <div className="logos-container">
        <img className="small-images" src={triangle} alt='triangle'/>
        <img className="small-images" src={star} alt='star'/>
      </div>
      <h2 id="score-message">
        Congratulations,
        <br/> you scored {props.score}/5
      </h2>
    </div>
    <div>
      <section className="stats">
      <div>
        {props.score*20}%
        <br/>
        <div id="selectionsTags">Correct Selections</div>
      </div>
      <div>
        {(5 - props.score)*20}%
        <br/>
        <div id="selectionsTags">Incorrect Selections</div>
      </div>
      </section>
      <button id="finalButton" onClick={(evt) => {
        evt.preventDefault();
        props.resetGame()
        props.history.push(`/homepage`)
      }} className="play-button" type="button">Return to Home</button>
    </div>
  </div>
)

const mapStateToProps = (state: IInitialState) => {
  return {
    score: state.game.score,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    resetGame: () => dispatch(resetGame())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard)
