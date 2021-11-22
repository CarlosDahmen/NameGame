import React from "react"
import { connect } from "react-redux"
import { fetchPeople } from "../store/people"
import Picture from "./Picture"

export class Game extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      people: [],
      realPerson: {},
      selectedPerson: {},
      renderOverlay: false
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

  componentDidMount(){
   this.props.fetchPeople()
  }

  componentDidUpdate(prevProps){
    if(prevProps.people !== this.props.people){
      let smallArray = this.props.people
      smallArray = smallArray.slice(0, 6)

      this.setState({
        people: smallArray,
        realPerson: smallArray[Math.floor(Math.random() * smallArray.length)],
      })
    }
  }

  clickHandler(id){
    console.log(this.state.selectedPerson)
    // if(!selectedPerson){
      let selected = this.state.people.find(person => id === person.id)
      this.setState({
        selectedPerson: selected,
        renderOverlay: true,
      })
    // }
  }


  render() {

    const { realPerson, people, selectedPerson, renderOverlay } = this.state;

    return (
      <div className="game">
        <h1>Which one of these good looking photos is the real</h1>
        <h2>{realPerson.firstName + " " + realPerson.lastName}</h2>
        <div className="game-container">
          <div className="picture-container">
            {people.length === 0 ?
              <h1>Loading</h1> :
              people.map(person => {
                return (
                  <Picture
                    key={person.id}
                    id={person.id}
                    picture={person.headshot.url}
                    selector={this.clickHandler}
                    renderOverlay={renderOverlay}
                    correct={selectedPerson.id === person.id && selectedPerson.id === realPerson.id}
                    incorrect={selectedPerson.id === person.id && selectedPerson.id !== realPerson.id}
                    />
                )
              })}
          </div>
          <button>Continue</button>
        </div>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    people: state.people
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPeople: () => dispatch(fetchPeople())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
