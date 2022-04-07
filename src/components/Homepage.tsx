import React from "react"
import logo from '../images/logo.png';
import { connect } from "react-redux";
import { History } from 'history';
import { IInitialState } from '../store/index';

interface IProps {
  rounds: number;
  history: History;
}

const Homepage: React.FunctionComponent<IProps> = (props) => {
    return (
      <div className="home">
        <img className="logo" src={logo} alt='logo'/>
        <p>
          Try matching the WillowTree employee to their photo.
        </p>
        <button onClick={(evt) => {
          evt.preventDefault();
          props.history.push(`/play/${props.rounds}`);
        }} className="play-button" type="button">Play!</button>
      </div>
    )
}

const mapStateToProps = (state: IInitialState) => {
  return {
    rounds: state.game.round
  }
}

export default connect(mapStateToProps, null)(Homepage)
