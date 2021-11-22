const Scoreboard = (props) => (
  <div className="scoreboard">
    <h2 id="score-message">
      Congratulations,
      <br/> you scored /5
    </h2>
    <button onClick={(evt) => {
      evt.preventDefault();
      props.history.push(`/homepage`)
    }} className="play-button" type="button">Return to Home</button>
    <div className="stats">
      <div>
        Correct Selections
      </div>
      <div>
        Incorrect Selections
      </div>
      <div>
        Avg Selection Time
      </div>
    </div>
  </div>
  )

export default Scoreboard
